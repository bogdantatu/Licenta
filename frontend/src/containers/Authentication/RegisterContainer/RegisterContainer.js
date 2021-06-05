import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Register from '../../../components/Authentication/Register/Register'


class RegisterContainer extends Component{
    constructor(props){
        super(props);
    }
    switchLoginHandler = () => {
        this.props.history.replace('/')
    }
    render() {
        return(
        <div>
            <Register switchLogin={this.switchLoginHandler}/>
            <Route 
                path={this.props.match.path + '/register'}/>
        </div>
        );
    };
};
export default RegisterContainer;