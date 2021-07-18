import React, { Component } from 'react';
import {connect} from 'react-redux';

import classes from './MyPost.module.css';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { withRouter } from 'react-router';
import axios from 'axios'


class MyPost extends Component{
    constructor(props){
        super(props)
        this.state ={
            imagini: ""
        }
    }
    componentDidMount(){
        axios.get(`http://localhost:8080/obiect/${this.props.props.id}`)
        .then(res => {
            this.setState({
                imagini: res.data.imagini
            })
        })
        .catch(err => console.log(err))
    }

    handleEdit = () =>{
        this.props.history.push(`/editpost/${this.props.props.id}`)
    }    

    handleDelete = () =>{
        axios.delete(`http://localhost:8080/anunt/${this.props.props.id}`)
        .then(res => console.log(res))
        .then(() => this.props.get())
        .catch(err => console.log(err))
    }
    handleClick = () => {
        this.props.history.push(`/post/${this.props.props.id}`)
    }
    render(){
        return(
            <div className={classes.Post}>
                <div onClick={this.handleClick} className={classes.Image}>
                    <img src={this.state.imagini} alt=""></img>
                </div>
                <div className={classes.Details}>
                    <div className={classes.Title}>
                        {this.props.props.titlu}
                    </div>
                    <div className={classes.User}>
                        {this.props.loggedUser.userName}
                    </div>
                </div>
                <div className={classes.ButtonContainer}>
                    <Button><EditIcon onClick={this.handleEdit} /></Button>
                    <Button><DeleteIcon onClick={this.handleDelete} color="error"/></Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({user}) => ({
    loggedUser: user.loggedUser
  })
  
export default connect(mapStateToProps)(withRouter(MyPost));