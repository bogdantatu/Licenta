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
            image: "",
            errors: {}
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
                image: res.data.imagini

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
    handleValidation(){;
        let errors = {};
        let formIsValid = true;
        //Title
        if(!this.state.title || this.state.title.length<3){
            formIsValid = false;
            errors["title"] = "Your title should have at least 3 characters"
        }
        //ShortDescription
        if(!this.state.shortDescription) {
           formIsValid = false;
           errors["shortDescription"] = "You didn't enter a short description";
        }
         //Description
         if(!this.state.description || this.state.description.length<10) {
            formIsValid = false;
            errors["description"] = "Your description should have at least 10 characters";
         }
           //ContactData
           if(!this.state.contactData || this.state.title.contactData<3) {
            formIsValid = false;
            errors["contactData"] = "You didn't add any contact data";
         }
           //Goal
           if(!this.state.description || !isNaN(this.state.title.description)) {
            formIsValid = false;
            errors["goal"] = "Your goal should be a number";
         }

       this.setState({errors: errors});
       return formIsValid;
   }
    handleEdit = () => {
        if(this.handleValidation()){
        axios.put(`http://localhost:8080/campanie/${this.props.match.params.id}`, {
            titlu: this.state.title,
            descriereScurta: this.state.shortDescription,
            descriere: this.state.description,
            contactData: this.state.contactData,
            goal: this.state.goal,
            imagini: this.state.image
        })
        .then(this.props.history.replace('/myfundraisers'))
        .catch(err => console.log(err))
        }else{
            alert("The form has errors!")
        }
    }
    render(){
        return(
            <div className={classes.EditFundraiser}>
                <h1 className={classes.title}>Edit your fundraising campaign</h1>
                <div className={classes.FormContainer}>
                    <form className={classes.Form}>
                        <label>Campaign Image</label>
                        <input 
                            type="text"
                            name="image"
                            value={this.state.image} 
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
                            value={this.state.title}
                            onChange={this.changeHandler}
                            required/>
                             <span style={{color: "red"}}>{this.state.errors["title"]}</span>   

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
                             <span style={{color: "red"}}>{this.state.errors["shortDescription"]}</span> 
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
                             <span style={{color: "red"}}>{this.state.errors["description"]}</span> 
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
                             <span style={{color: "red"}}>{this.state.errors["contactData"]}</span> 
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
                             <span style={{color: "red"}}>{this.state.errors["goal"]}</span> 
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