import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import classes from './Menu.module.css';
import MenuObject from './MenuObject/MenuObject'

const menu = (props) => (
    <ul className={classes.Menu}>
        <li>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}/>
          </div>
        </li>
        <MenuObject link="/fundraising">Fundraising</MenuObject>
        <MenuObject link="/sharing">Object Sharing</MenuObject>
        <li><IconButton> <AccountCircleIcon/></IconButton></li>
    </ul>
);
export default menu;