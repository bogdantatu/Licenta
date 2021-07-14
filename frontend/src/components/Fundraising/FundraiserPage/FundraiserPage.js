import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import { ProgressBar } from 'primereact/progressbar';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import axios from "axios"

import Button from '../../UI/Button/Button'
import classes from './FundraiserPage.module.css';

class FundraiserPage extends Component{
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
        })
        .catch(err => console.log(err))
    }
    donateHandler = () =>{
        let updatedFundraiser = this.state.fundraiser;
        updatedFundraiser.progress += 10
       
        this.setState({
            fundraiser: updatedFundraiser
        }, () => {
            axios.put(`http://localhost:8080/campanie/${this.state.fundraiser.id}`, {
                progress: updatedFundraiser.progress
            })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        })
    }
    render(){
        return(
            <div className={classes.FundraiserPage}>
                <div className={classes.TitleArea}>
                    <h1>{this.state.fundraiser.titlu}</h1>
                    <h3>{this.state.fundraiser.descriereScurta}</h3>
                </div>
                <div className={classes.Details}>
                    <div>
                        <img src="https://files.globalgiving.org/pfil/5871/pict_large.jpg?m=1278086819000" alt="imagine"></img>
                    </div>
                    <div>
                        <h3>Description:</h3>
                        <p>{this.state.fundraiser.descriere}</p>
                    </div>
                    <div>
                        <h3>Contact: </h3>
                        <p>{this.state.fundraiser.dateContact}</p>
                    </div>
                </div>
                <div className={classes.Progress}>
                    <h3>Goal status:</h3>
                    <ProgressBar className={classes.ProgressColor} unit="$" value={this.state.fundraiser.progress} />
                    <h3>Goal: {this.state.fundraiser.goal}</h3>
                    <div className={classes.ButtonContainer}>
                        <div className={classes.btnDonate}>
                            <Button 
                                btnType="Donate"
                                clicked={this.donateHandler}><span>Donate</span></Button>
                        </div>
                        <div className={classes.btnShare}>
                            <Button btnType="Share"><span>Share</span></Button>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default withRouter(FundraiserPage);