import React from 'react';


import classes from './Login.module.css';
import Button from '../../UI/Button/Button'

const login = (props) => (
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
                    <input className={classes.Input} type="email" name="email" placeholder="Email"/>        
                    <input className={classes.Input} type="password" name="password" placeholder="Password"/>            
                <p>Did you forgot your password?</p>
                <Button>Login</Button>
                </form>
                <div className={classes.Register}>
                    <p>You don't have an account yet?</p>
                    <Button
                        clicked={props.switchRegister}>Register now</Button>
                </div>
            </div>
        </div>
    </div>
);
export default login;


