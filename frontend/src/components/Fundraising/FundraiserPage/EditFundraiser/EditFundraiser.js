import React, { Component } from 'react';
import classes from './EditFundraiser.module.css';

import { withRouter } from 'react-router-dom'


import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import axios from 'axios'

class EditFundraiser extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: "",
            shortDescription: "",
            description: "",
            contactData: "",
            goal: "",
        }

    }
    componentDidMount(){
        axios.get(`http://localhost:8080/campanie/${this.props.match.params.id}`)
        .then(res => {
            this.setState({
                title: res.data.titlu,
                shortDescription: res.data.descriereScurta,
                description: res.data.descriere,
                contactData: res.data.dateContact,
                goal: res.data.goal,
            })
        })
        .catch(err => console.log(err))
    }

    cancelHandler = () => {
        this.props.history.replace('/myfundraisers')
    }
    
    changeHandler = (evt) => {
        this.setState({
            ...this.state,
            [evt.target.name] : evt.target.value
        })
    }
    handleEdit = () => {
        axios.put(`http://localhost:8080/campanie/${this.props.match.params.id}`, {
            titlu: this.state.title,
            descriereScurta: this.state.shortDescription,
            descriere: this.state.description,
            contactData: this.state.contactData,
            goal: this.state.goal
        })
        .then(this.props.history.replace('/myfundraisers'))
        .catch(err => console.log(err))
    }
    render(){
        return(
            <div className={classes.EditFundraiser}>
                <h1 className={classes.title}>Edit your fundraising campaign</h1>
                <div className={classes.FormContainer}>
                    <form className={classes.Form}>
                        {/* <label>Campaign Image</label> */}
                        {/* <input 
                            type="file"
                            name="image"
                            value={this.state.image} 
                            onChange={this.changeHandler}
                            required/> */}
                        <label>
                            Campaign Title
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
                            Short Description
                        </label>
                        <TextField 
                            className={classes.Input} 
                            id="outlined-basic" 
                            label="Short Description" 
                            variant="outlined" 
                            type="shortDescription"
                            name="shortDescription"
                            value={this.state.shortDescription}
                            onChange={this.changeHandler}
                            required/>
                        <label>
                            Fundraiser Description
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
                        <label>
                            Goal
                        </label>
                        <TextField 
                            className={classes.Input} 
                            id="outlined-basic" 
                            label="Goal" 
                            variant="outlined" 
                            type="goal"
                            name="goal"
                            value={this.state.goal}
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
export default withRouter(EditFundraiser);