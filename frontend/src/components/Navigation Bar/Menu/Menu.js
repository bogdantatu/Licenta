import React from 'react';

import classes from './Menu.module.css';
import MenuObject from './MenuObject/MenuObject'

const menu = (props) => (
    <ul className={classes.Menu}>
        Logo
        Search bar
        <MenuObject link="/fundraising">Fundraising</MenuObject>
        <MenuObject link="/sharing">Object Sharing</MenuObject>
    </ul>
);
export default menu;