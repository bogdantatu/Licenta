import React from 'react';

import classes from './Register.module.css';
import Button from '../../UI/Button/Button'

const register = (props) => (
    <div className={classes.Section}>
        <div className={classes.RegisterRight}>
            <div className={classes.RegisterRightWrapper}>
                <h1>Register</h1>
                <form className={classes.Form}>
                    <input 
                        className={classes.Input} 
                        type="email" 
                        name="email"
                        placeholder="Email" 
                        value={props.email} 
                        onChange={props.onChangeMail}/>        
                    <input 
                        className={classes.Input} 
                        type="password" 
                        name="password"
                        placeholder="Password" 
                        value={props.password}
                        onChange={props.onChangePass}/>            
                <Button clicked={props.register}>Register</Button>
                </form>
                <div className={classes.Login}>
                    <p>Do you already have an account?</p>
                    <Button clicked={props.switchLogin}>Login now</Button>
                </div>
            </div>
        </div>
        <div className={classes.RegisterLeft}>
            <div className={classes.RegisterLeftWrapper}>
                <p>logo</p>
                <h1>Denumire Aplicatie</h1>
            </div>
        </div>
    </div>
);
export default register;


