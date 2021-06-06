import React, { Component } from 'react';

import Register from '../../components/Authentication/Register/Register'
import Login from '../../components/Authentication/Login/Login'

class LoginRegister extends Component{
    render(){
        return(
            <div>
                <Login />
                <Register />
            </div>
        )
    }
}


export default LoginRegister;