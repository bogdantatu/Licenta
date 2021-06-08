import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import {connect} from 'react-redux';

import {setLoggedUser} from '../../../store/User/action'

import firebase from '../../../firebase';
import axios from 'axios';

import classes from './Login.module.css';
import Button from '../../UI/Button/Button'

class Login extends Component{    
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    
    handleLogin = (e) => {
        e.preventDefault()
        const { setLoggedUser } = this.props
        try {
            firebase.auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {
                    axios.get(`http://localhost:8080/utilizator?email=${this.state.email}`)
                                .then(res => {
                                    console.log(res)
                                  setLoggedUser(res.data)
                                 
                                })
                                .catch(err => {
                                  alert(err)
                                })
                                this.props.history.replace('/fundraising')
                                this.setState({
                                    email:"",
                                    password:""
                   
                    })
                })
        } catch (error) {
            console.log(error)
        }
    }

    switchRegisterHandler = () => {
        this.props.history.replace('/register')
    }

    changeHandler = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }

    render() {
        return(
        <div className={classes.Section}>
                <div className={classes.LoginLeft}>
                    <div className={classes.LoginLeftWrapper}>
                        <p>logo</p>
                        <h1>Denumire Aplicatie</h1>
                        <p>Let's help other people</p>
                    </div>
                </div>
                <div className={classes.LoginRight}>
                    <div className={classes.LoginRightWrapper}>
                        <h1>Log in</h1>
                        <form className={classes.Form}>
                            <input 
                                className={classes.Input} 
                                type="email" 
                                name="email" 
                                value={this.state.email}
                                placeholder="Email"
                                onChange={this.changeHandler}
                                required/>        
                            <input 
                                className={classes.Input} 
                                type="password" 
                                name="password" 
                                value={this.state.password}
                                placeholder="Password"
                                onChange={this.changeHandler}
                                required/>            
                        <p>Did you forgot your password?</p>
                        <Button
                            clicked={this.handleLogin}>Login</Button>
                        </form>
                        <div className={classes.Register}>
                            <p>You don't have an account yet?</p>
                            <Button
                                clicked={this.switchRegisterHandler}>Register now</Button>
                        </div>
                    </div>
                </div>
                <Route 
                    path={this.props.match.path + '/'} />
            </div>
        )
    }
}
  
  const mapDispatchToProps = dispatch => (
    {
        setLoggedUser: user => dispatch(setLoggedUser(user))
    }
  );
  
export default connect(null, mapDispatchToProps)(Login);


