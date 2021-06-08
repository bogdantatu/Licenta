import React from 'react';

import classes from './Toolbar.module.css';
import Menu from '../Menu/Menu';

const toolbar = (props) => (
   <header className={classes.Toolbar}>
       <nav className={classes.DesktopNav}>
           <Menu />
        </nav>
   </header>
);
export default toolbar;