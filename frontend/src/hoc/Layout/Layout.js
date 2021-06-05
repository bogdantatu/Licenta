import React, { Component } from 'react';

import classes from './Layout.module.css';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation Bar/Toolbar/Toolbar'

class Layout extends Component{
    render(){
        return(
            <Aux>
                <Toolbar />
                <main className={classes.Layout}> 
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;