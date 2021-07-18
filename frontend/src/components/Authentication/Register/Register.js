import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import {connect} from 'react-redux';

import {setLoggedUser} from '../../../store/User/action'


import classes from './Register.module.css';
import Button from '../../UI/Button/Button'

import firebase from '../../../firebase';
import axios from 'axios';
import Logo from '../../../assets/Images/Logo.svg'


class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            username: "",
            email : "",
            password : "",
            errors: {}
        }
    }

    handleValidation(){;
        let errors = {};
        let formIsValid = true;
        if(!this.state.username || this.state.username.length<2){
            formIsValid = false;
            errors["username"] = "Your username should have at least 2 characters"
        }
        //Email
        if(!this.state.email) {
           formIsValid = false;
           errors["email"] = "You didn't enter your email";
        }
        if(typeof this.state.email !== "undefined"){
            let lastAtPos = this.state.email.lastIndexOf('@');
            let lastDotPos = this.state.email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.email.indexOf('@@') === -1 && lastDotPos > 2 && (this.state.email.length - lastDotPos) > 2)) {
               formIsValid = false;
               errors["email"] = "Email is not valid";
             }
        }  
        //Password
        if(!this.state.password ||this.state.password.length<6){
           formIsValid = false;
           errors["password"] = "Your password should have at least 6 characters!";
        }
       this.setState({errors: errors});
       return formIsValid;
   }

    registerHandler = (e) => {
        e.preventDefault()
        const { setLoggedUser } = this.props
        if(this.handleValidation()){
            try {
                 firebase.auth()
                    .createUserWithEmailAndPassword(this.state.email, this.state.password)
                    .then((res) => {
                        axios.post('http://localhost:8080/utilizator', {
                            id: res.user.uid,
                            userName: this.state.username,
                            email: res.user.email,
                        })
                        .then(response => {
                            if(response.data){ 
                                setLoggedUser(response.data)
                                this.props.history.replace('/fundraising')
                            }
                        });
                    })
            } catch (error) {
                console.log(error)
            }
            }else{
                alert("The form has errors")
            }
        }

    switchLoginHandler = () => {
        this.props.history.replace('/')
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
                            <span style={{color: "red"}}>{this.state.errors["username"]}</span>   
   
                        <input 
                            className={classes.Input} 
                            type="email" 
                            name="email"
                            placeholder="Email" 
                            value={this.state.email}
                            onChange={this.changeHandler}/>
                            <span style={{color: "red"}}>{this.state.errors["email"]}</span>   
                        <input 
                            className={classes.Input} 
                            type="password" 
                            name="password"
                            placeholder="Password" 
                            value={this.state.password}
                            onChange={this.changeHandler}/>  
                            <span style={{color: "red"}}>{this.state.errors["password"]}</span>   
          
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
                    <img src={Logo} alt=""></img>
                </div>
            </div>
            <Route 
                path={this.props.match.path + '/register'}/>
        </div>
        )
    }
   
}

  const mapDispatchToProps = dispatch => (
    {
        setLoggedUser: user => dispatch(setLoggedUser(user))
    }
  );
  
export default connect(null, mapDispatchToProps)(Register);


