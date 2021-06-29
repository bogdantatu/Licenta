import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Route } from 'react-router-dom'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import axios from 'axios'

import classes from './AddPost.module.css';

class AddPost extends Component {
    constructor(props){
        super(props);
        this.state= {
            title: "",
            description: "",
            contactData: "",
            object: { "imagini": ""}
        }
    }
  
    addHandler = () => {
        axios.post(`http://localhost:8080/anunt/${this.props.loggedUser.id}`, {
            titlu: this.state.title,
            descriere: this.state.description,
            dateContact: this.state.contactData,
            Obiect: { "imagini": "unBlob"}
        })
        .then(()=>this.props.history.replace('/sharing'))
        .then(res => console.log(res))
        .catch(err => alert(err))
    }

    cancelHandler = () => {
        this.props.history.replace('/sharing')
    }
    
    changeHandler = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }
    render(){
        return(
        <div className={classes.AddPost}>
            <h1 className={classes.title}>Donate your object!</h1>
            <div className={classes.FormContainer}>
                <form className={classes.Form}>
                    <label>
                        Object
                    </label>
                    <TextField
                        className={classes.Input} 
                        id="outlined-basic" 
                        label="Title" 
                        variant="outlined" 
                        type="title"
                        name="title"
                        value={this.state.title}
                        onChange={this.changeHandler}
                        required/>
                    <label>
                        Object Description
                    </label>
                    <TextField
                        className={classes.Input} 
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        variant="outlined"
                        type="description"
                        name="description"
                        value={this.state.description}
                        onChange={this.changeHandler}
                        required/>
                    <label>
                        Contact data
                    </label>
                    <TextField
                        className={classes.Input}  
                        id="outlined-basic" 
                        label="Contact" 
                        variant="outlined" 
                        type="contactData"
                        name="contactData"
                        value={this.state.contactData}
                        onChange={this.changeHandler}
                        required/>
                </form>
                <div className={classes.btnContainer}>
                 <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.btnAdd}
                    onClick={this.addHandler}><span>Add</span></Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    className={classes.btnCancel}
                    onClick={this.cancelHandler}><span>Cancel</span></Button>
                </div>
            </div>
            <Route 
                path={this.props.match.path + '/AddPost'}/>
        </div>
    )}
}

const mapStateToProps = ({user}) => ({
    loggedUser: user.loggedUser
  })
  
export default connect(mapStateToProps)(AddPost);