import React from 'react';

import classes from './Register.module.css';
import Button from '../../UI/Button/Button'

const register = (props) => (
    <div className={classes.Register}>
        <h1>Create your account</h1>
        <span>Use your email for signing up</span>
        <form className={classes.Form}>
            <input className={classes.Input} type="email" name="email" placeholder="Email"/>        
            <input className={classes.Input} type="password" name="password" placeholder="Password"/>            
        <Button>Register</Button>    
        </form>
    </div>
);
export default register;


