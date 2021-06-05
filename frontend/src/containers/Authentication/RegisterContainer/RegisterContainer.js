import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import axios from 'axios';
import firebase from '../../../firebase'


import Register from '../../../components/Authentication/Register/Register'
import firebaseConfig from '../../../firebase';



class RegisterContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            email : "",
            password : ""
        }
    }

    registerHandler = () => {
        firebase.auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then((user) => console.log(user))
                .catch((err)=>{
                    console.log(err);
                });

            }
   
    switchLoginHandler = () => {
        this.props.history.replace('/login')
       
    }

    changeHandler = (evt) => {
        this.setState({
           
        })
    }

    render() {
        return(
        <div>
            <Register 
                register={this.registerHandler}
                switchLogin={this.switchLoginHandler}
                email={this.state.email}
                password={this.state.password}
                onChangeMail={this.changeHandler}
                onChangePass={this.changeHandler}/>
            <Route 
                path={this.props.match.path + '/register'}/>
        </div>
        );
    };
};
export default RegisterContainer;