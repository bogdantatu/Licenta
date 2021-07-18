import React, { Component } from 'react';
import classes from './EditProfile.module.css';

import { withRouter } from 'react-router-dom'


import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import axios from 'axios'

class EditProfile extends Component{
    constructor(props){
        super(props)
        this.state = {
            userName: "",
            email: "",
            nume: "",
            prenume: "",
            imagineProfil: "",
        }

    }
    componentDidMount(){
        axios.get(`http://localhost:8080/utilizator/${this.props.loggedUser.id}`)
        .then(res => {
            this.setState({
                userName: res.data.userName,
                nume: res.data.nume,
                prenume: res.data.prenume,
                email: res.data.email,
                imagineProfil: res.data.imagineProfil
            })
        })
        .catch(err => console.log(err))
    }

    cancelHandler = () => {
        this.props.history.replace('/profile')
    }
    
    changeHandler = (evt) => {
        this.setState({
            ...this.state,
            [evt.target.name] : evt.target.value
        })
    }
    handleEdit = () => {
        axios.put(`http://localhost:8080/utilizator/${this.props.loggedUser.id}`, {
            userName: this.state.userName,
            nume: this.state.nume,
            prenume: this.state.prenume,
            email: this.state.email,
            imagineProfil: this.state.imagineProfil,
        })
        .then(this.props.history.replace('/profile'))
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
    render(){
        return(
            <div className={classes.EditProfile}>
                <h1 className={classes.title}>Edit your Profile details</h1>
                <div className={classes.FormContainer}>
                    <form className={classes.Form}>
                        <label>Profile Photo</label>
                        <input 
                            type="text"
                            name="imagineProfil"
                            label="Profile photo"
                            value={this.state.imagineProfil} 
                            onChange={this.changeHandler}
                            required/>
                        <label>
                            Username
                        </label>
                        <TextField
                            className={classes.Input} 
                            id="outlined-basic" 
                            label="Username" 
                            variant="outlined" 
                            type="title"
                            name="userName"
                            value={this.state.userName}
                            onChange={this.changeHandler}
                            required/>
                        <label>
                            Name
                        </label>
                        <TextField 
                            className={classes.Input} 
                            id="outlined-basic" 
                            label="Surname" 
                            variant="outlined" 
                            type="shortDescription"
                            name="nume"
                            value={this.state.nume}
                            onChange={this.changeHandler}
                            required/>
                        <label>
                            Prenume
                        </label>
                        <TextField
                            className={classes.Input} 
                            id="outlined-multiline-static"
                            label="First name"
                            multiline
                            variant="outlined"
                            type="description"
                            name="prenume"
                            value={this.state.prenume}
                            onChange={this.changeHandler}
                            required/>
                        <label>
                            Email
                        </label>
                        <TextField
                            className={classes.Input}  
                            id="outlined-basic" 
                            label="Email" 
                            variant="outlined" 
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.changeHandler}
                            required/>
                    </form>
                    <div className={classes.btnContainer}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.btnEdit}
                        onClick={this.handleEdit}><span>Edit</span></Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        className={classes.btnCancel}
                        onClick={this.cancelHandler}><span>Cancel</span></Button>
                    </div>
                </div>
        </div>
        )
    }
}


const mapStateToProps = ({user}) => ({
    loggedUser: user.loggedUser
  })
  
export default connect(mapStateToProps)(withRouter(EditProfile));