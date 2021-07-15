import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';


import classes from './Menu.module.css';
import MenuObject from './MenuObject/MenuObject'


class Menu extends Component{
  constructor(props){
    super(props)
    this.state = {
      keyword: ""
    }
  }
  handleChange = (evt) => {
      this.setState({
          keyword : evt.target.value
      }, () => this.props.history.push(`/search/?filter=${this.state.keyword}`))
  }
    render(){
      return(
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
              }}
              name="keyword"
              onChange={this.handleChange}
              value={this.state.keyword}/>
          </div>
        </li>
        <MenuObject link="/fundraising">Fundraising</MenuObject>
        <MenuObject link="/sharing">Object Sharing</MenuObject>
        <MenuObject link="/profile"><IconButton ><AccountCircleIcon /></IconButton></MenuObject>
    </ul>
      )
    }
} 
  
export default withRouter(Menu);