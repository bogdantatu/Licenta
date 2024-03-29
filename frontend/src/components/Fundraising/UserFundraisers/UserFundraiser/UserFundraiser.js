import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {withRouter} from 'react-router-dom'

import axios from 'axios'

import classes from './UserFundraiser.module.css';

class UserFundraiser extends Component{
    handleEdit = () =>{
        this.props.history.push(`/editfundraiser/${this.props.props.id}`)
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
                <img src={this.props.props.imagini} alt="imagine"/>
                <div className={classes.userFundraiserDetails}>
                    <div className={classes.Title}>{this.props.props.titlu}</div>
                    <div className={classes.Description}>{this.props.props.descriereScurta}</div>
                </div>
                <div className={classes.ProgressGoal}>
                        <div className={classes.Progress}><b>{this.props.props.progress} $</b> raised out of <b>{this.props.props.goal} $</b></div>
                </div>
                <div className={classes.Buttons}>
                    <div className={classes.ProgressBar}></div>
                    <div className={classes.Status}>{this.props.props.status}</div>
                    <Button><EditIcon onClick={this.handleEdit}/></Button>
                    <Button><DeleteIcon onClick={this.handleDelete} color="error"/></Button>
                </div>
            </div>
        )
    }
}

export default withRouter(UserFundraiser);