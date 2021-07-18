import React, { Component } from 'react';

import classes from './EditPost.module.css';
import axios from 'axios'
import { withRouter } from 'react-router';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class EditPost extends Component{
    constructor(props){
        super(props);
        this.state= {
            title: "",
            description: "",
            contactData: "",
            imagini: "",
            errors: {}
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:8080/obiect/${this.props.match.params.id}`)
        .then(res => {
            this.setState({
                imagini: res.data.imagini
            })
        })
        .catch(err => console.log(err))
        
        axios.get(`http://localhost:8080/anunt/${this.props.match.params.id}`)
        .then(res => {
            this.setState({
                title: res.data.titlu,
                description: res.data.descriere,
                contactData: res.data.dateContact
            })
        })
        .catch(err => console.log(err))
    }
    handleValidation(){;
        let errors = {};
        let formIsValid = true;
        //Title
        if(!this.state.title || this.state.title.length<3){
            formIsValid = false;
            errors["title"] = "Your title should have at least 3 characters"
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
          //ContactData
          if(!this.state.imagini) {
            formIsValid = false;
            errors["imagini"] = "You didn't add a image ";
         }

       this.setState({errors: errors});
       return formIsValid;
   }
    editHandler = () => {
        if(this.handleValidation()){
            axios.put(`http://localhost:8080/anunt/${this.props.match.params.id}`, {
                titlu: this.state.title,
                descriere: this.state.description,
                dateContact: this.state.contactData,
                Obiect: {imagini: this.state.imagini}
            })
            .then(()=>this.props.history.replace('/sharing'))
            .catch(err => alert(err))
        }else{
            alert("The form has errors!")
        }
    }

    cancelHandler = () => {
        this.props.history.replace('/sharing')
    }
    
    changeHandler = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value,
        })
    }
    render(){
        return(
        <div className={classes.EditPost}>
            <h1 className={classes.title}>Edit your post!</h1>
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
                        <span style={{color: "red"}}>{this.state.errors["title"]}</span>
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
                        Imagine
                    </label>    
                    <TextField
                        className={classes.Input}  
                        id="outlined-basic" 
                        label="Imagine" 
                        variant="outlined" 
                        type="imagini"
                        name="imagini"
                        value={this.state.imagini}
                        onChange={this.changeHandler}
                        required/>
                        <span style={{color: "red"}}>{this.state.errors["imagini"]}</span>
                </form>
                <div className={classes.btnContainer}>
                 <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.btnAdd}
                    onClick={this.editHandler}><span>Edit</span></Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    className={classes.btnCancel}
                    onClick={this.cancelHandler}><span>Cancel</span></Button>
                </div>
            </div>
        </div>
    )}
}


  
export default withRouter(EditPost);

