import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


import axios from 'axios'

import classes from './UserFundraiser.module.css';

class UserFundraiser extends Component{
    handleEdit = () =>{
        console.log("edit")
    }

    handleDelete = () =>{
        axios.delete(`http://localhost:8080/campanie/${this.props.props.id}`)
        .then(res => console.log(res))
        .then(() => this.props.get())
        .catch(err => console.log(err))
    }
 
    render(){
        return(
            <div className={classes.userFundraiser}>
                <img src="https://files.globalgiving.org/pfil/5871/pict_large.jpg?m=1278086819000" alt="imagine"/>
                <div className={classes.userFundraiserDetails}>
                    <div className={classes.Title}>{this.props.props.titlu}</div>
                    <div className={classes.Description}>{this.props.props.descriereScurta}</div>
                </div>
                <div className={classes.Buttons}>
                    <div className={classes.ProgressBar}></div>
                    <div className={classes.Status}>ACTIVE</div>
                    <Button><EditIcon onClick={this.handleEdit}/></Button>
                    <Button><DeleteIcon onClick={this.handleDelete}/></Button>
                </div>
            </div>
        )
    }
}

export default UserFundraiser;