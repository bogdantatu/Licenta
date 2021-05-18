import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Login from '../../components/Authentication/Login/Login'
// import Register from '../../components/Authentication/Register/Register'

import classes from './Authentication.module.css'


class Authentication extends Component{
    render() {
        return(
            <Aux>
                <div className={classes.Authentication}>
                    <Login />
                    {/* <Register /> */}
                </div>
            </Aux>
        );
    };
};
export default Authentication;