import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';


import classes from './AddFundraiser.module.css';

class AddFundraiser extends Component {
    constructor(props){
        super(props);
        this.state= {
            title: "",
            shortDescription: "",
            description: "",
            contactData: "",
            goal: null
        }
    }

    
    changeHandler = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }
    render(){
        return(
        <div className={classes.AddFundraiser}>
            <h1 className={classes.title}>Add your fundraising campaign</h1>
            <div className={classes.FormContainer}>
                <form className={classes.Form}>
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
                    className={classes.btnAdd}
                    startIcon={<AddCircleIcon/>}
                    onClick={this.props.clickedAdd}>Add</Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    className={classes.btnCancel}
                    startIcon={<DeleteIcon />}
                    onClick={this.props.clickedCancel}> Cancel</Button>
                </div>
            </div>
        </div>
    )}
}
export default AddFundraiser;