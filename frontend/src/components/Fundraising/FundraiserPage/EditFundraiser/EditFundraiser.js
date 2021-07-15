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
            fundraiser: {}
        }
    }
    componentDidMount(){
        axios.get(`http://localhost:8080/campanie/${this.props.match.params.id}`)
        .then(res => {
            this.setState({
                fundraiser: res.data
            })
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    cancelHandler = () => {
        this.props.history.replace('/myfundraisers')
    }
    
    changeHandler = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }
    handleEdit = () => {
        axios.put(`http://localhost:8080/campanie/${this.state.fundraiser.id}`, {
            imagini: this.state.fundraiser.imagini,
            titlu: this.state.fundraiser.titu,
            descriereScurta: this.state.fundraiser.descriereScurta,
            descriere: this.state.fundraiser.descriere,
            contactData: this.state.fundraiser.contactData,
            goal: this.state.fundraiser.goal
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    render(){
        return(
            <div className={classes.EditFundraiser}>
            <h1 className={classes.title}>Edit your fundraising campaign</h1>
            <div className={classes.FormContainer}>
                <form className={classes.Form}>
                    <label>Campaign Image</label>
                    <input 
                        type="file"
                        name="image"
                        value={this.state.fundraiser.imagini} 
                        onChange={this.changeHandler}
                        required/>
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
                        value={this.state.fundraiser.titlu}
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
                        value={this.state.fundraiser.descriereScurta}
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
                        value={this.state.fundraiser.descriere}
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
                        value={this.state.fundraiser.contactData}
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
                        value={this.state.fundraiser.goal}
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