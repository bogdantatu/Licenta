import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Login from '../../../components/Authentication/Login/Login'



class LoginContainer extends Component{
    constructor(props) {
        super(props)
        }

    switchRegisterHandler = () => {
        this.props.history.replace('/register')
    }
    render() {
        return(
        <div>
            <Login switchRegister={this.switchRegisterHandler}/>
            <Route 
                    path={this.props.match.path + '/'} />
        </div>
        );
    };
};
export default LoginContainer;