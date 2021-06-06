import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import classes from './Register.module.css';
import Button from '../../UI/Button/Button'

import firebase from '../../../firebase';
import axios from 'axios';


class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            username: "",
            email : "",
            password : ""
        }
    }

    registerHandler = (e) => {
        e.preventDefault()
            try {
                 firebase.auth()
                    .createUserWithEmailAndPassword(this.state.email, this.state.password)
                    .then((res) => {
                        axios.post('http://localhost:8080/utilizator', {
                            id: res.user.uid,
                            userName: this.state.username,
                            email: res.user.email,
                        })
                        .then(this.props.history.replace('/'));
                    })
            } catch (error) {
                console.log(error)
            }
        }


    switchLoginHandler = () => {
        this.props.history.replace('/login')
    }

    changeHandler = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }

    render(){
        return( 
        <div className={classes.Section}>
            <div className={classes.RegisterRight}>
                <div className={classes.RegisterRightWrapper}>
                    <h1>Register</h1>
                    <form className={classes.Form}>
                    <input 
                            className={classes.Input} 
                            type="username" 
                            name="username"
                            placeholder="Username" 
                            value={this.state.username}
                            onChange={this.changeHandler}/>        
                        <input 
                            className={classes.Input} 
                            type="email" 
                            name="email"
                            placeholder="Email" 
                            value={this.state.email}
                            onChange={this.changeHandler}/>        
                        <input 
                            className={classes.Input} 
                            type="password" 
                            name="password"
                            placeholder="Password" 
                            value={this.state.password}
                            onChange={this.changeHandler}/>            
                    <Button clicked={this.registerHandler}>Register</Button>
                    </form>
                    <div className={classes.Login}>
                        <p>Do you already have an account?</p>
                        <Button clicked={this.switchLoginHandler}>Login now</Button>
                    </div>
                </div>
            </div>
            <div className={classes.RegisterLeft}>
                <div className={classes.RegisterLeftWrapper}>
                    <p>logo</p>
                    <h1>Denumire Aplicatie</h1>
                </div>
            </div>
            <Route 
                path={this.props.match.path + '/register'}/>
        </div>
        )
    }
   
}
export default Register;


