import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Route } from 'react-router-dom'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import axios from 'axios'

import classes from './AddFundraiser.module.css';

class AddFundraiser extends Component {
    constructor(props){
        super(props);
        this.state= {
            title: "",
            shortDescription: "",
            description: "",
            contactData: "",
            goal: "",
            image: "",
            errors: {}
        }
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
    addHandler = () => {
        if(this.handleValidation()){
            axios.post(`http://localhost:8080/campanie/${this.props.loggedUser.id}`, {
                titlu: this.state.title,
                descriereScurta: this.state.shortDescription,
                descriere: this.state.description,
                dateContact: this.state.contactData,
                goal: this.state.goal,
                imagini: this.state.image
            })
            .then(()=>this.props.history.replace('/fundraising'))
            .catch(err => alert(err))
        }
        else{
            alert("The form has errors")
        }
      
    }

    cancelHandler = () => {
        this.props.history.replace('/fundraising')
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
                    <label>Campaign Image</label>
                    <input 
                        type="url"
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
                path={this.props.match.path + '/addfundraiser'}/>
        </div>
    )}
}

const mapStateToProps = ({user}) => ({
    loggedUser: user.loggedUser
  })
  
export default connect(mapStateToProps)(AddFundraiser);