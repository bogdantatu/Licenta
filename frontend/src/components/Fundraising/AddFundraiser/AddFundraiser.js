import React, { Component } from 'react';

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
                    <input 
                        className={classes.Input} 
                        type="title" 
                        name="title" 
                        value={this.state.title}
                        placeholder="Title"
                        onChange={this.changeHandler}
                        required/> 
                    </label>  
                    <label>
                        Short Description
                    <input 
                        className={classes.Input} 
                        type="shortDescription" 
                        name="shortDescription" 
                        value={this.state.shortDescription}
                        placeholder="The statement that best describes your fundraising campaign"
                        onChange={this.changeHandler}
                        required/>
                    </label>
                    <label>
                        Description
                    <input 
                        className={classes.Input} 
                        type="description" 
                        name="description" 
                        value={this.state.description}
                        placeholder="Description"
                        onChange={this.changeHandler}
                        required/>  
                    </label>
                    <label>
                        Contact data
                    <input 
                        className={classes.Input} 
                        type="contactData" 
                        name="contactData" 
                        value={this.state.contactData}
                        placeholder="Contact"
                        onChange={this.changeHandler}
                        required/>  
                    </label>
                    <label>
                        Goal
                    <input 
                        className={classes.Input} 
                        type="goal" 
                        name="goal" 
                        value={this.state.goal}
                        placeholder="Goal"
                        onChange={this.changeHandler}
                        required/>  
                    </label>
                </form>
            </div>
        </div>
    )}
}
export default AddFundraiser;