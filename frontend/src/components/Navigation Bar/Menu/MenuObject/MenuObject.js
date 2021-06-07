import React from 'react';
import { NavLink } from 'react-router-dom';


import classes from './MenuObject.module.css';

const menuObject = (props) => (
    <li className={classes.MenuObject}>
        <NavLink
            exact={props.exact}
            activeClassName={classes.active}
            to={props.link}>
            {props.children}
        </NavLink>
    </li>
);
export default menuObject;