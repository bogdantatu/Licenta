import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'



import { ProgressBar } from 'primereact/progressbar';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


import axios from "axios"

import Button from '../../UI/Button/Button'
import classes from './FundraiserPage.module.css';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

class FundraiserPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            fundraiser: {},
            progress: 0,
            donation: "",
            open: false
        }
        
    }
    componentDidMount(){
        axios.get(`http://localhost:8080/campanie/${this.props.match.params.id}`)
        .then(res => {
            this.setState({
                fundraiser: res.data,
                progress: (res.data.progress * 100 / res.data.goal).toFixed(2)
            })
        })
        .catch(err => console.log(err))
    }


    donateHandler = () =>{
        let updatedFundraiser = this.state.fundraiser;
        let donation = this.state.donation
        updatedFundraiser.progress += +donation
        this.setState({
            fundraiser: updatedFundraiser,
            progress: (updatedFundraiser.progress * 100 / updatedFundraiser.goal).toFixed(2),
            open:true
        }, () => {
            axios.put(`http://localhost:8080/campanie/${this.state.fundraiser.id}`, {
                progress: updatedFundraiser.progress
            })
            .catch(err => console.log(err))
        })
        this.setState({
            donation: "",
        })
    }

    changeHandler = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }
    handleClose = () => {
        this.setState({
            open:false
        })
      };
     
    
    render(){
     
        return(
            <div className={classes.FundraiserPage}>
                <div className={classes.TitleArea}>
                    <h1>{this.state.fundraiser.titlu}</h1>
                    <h3>{this.state.fundraiser.descriereScurta}</h3>
                </div>
                <div className={classes.Details}>
                    <div>
                        <img src={this.state.fundraiser.imagini} alt="imagine"></img>
                    </div>
                    <div className={classes.Description}>
                        <div>
                            <h4>{this.props.history.location.state}</h4>
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
                </div>
                <div className={classes.Progress}>
                    <h3>Goal status:</h3>
                    <ProgressBar className={classes.ProgressColor} unit="%" value={this.state.progress} />
                    <p className={classes.Goal}>Goal: <b>{this.state.fundraiser.goal}</b></p>
                        <div className={classes.Input}>
                            <p><b>Donate something:</b> </p><input 
                                className={classes.Donation}
                                type="number" 
                                value={this.state.donation}
                                name="donation"
                                onChange={this.changeHandler}/>
                                <p><b>$</b></p>
                        </div>
                    <div className={classes.ButtonContainer}>
                        <div className={classes.btnDonate}>
                            <Button 
                                btnType="Donate"
                                clicked={this.donateHandler}><span>Donate</span></Button>
                        </div>
                        {/* <div className={classes.btnShare}>
                            <Button btnType="Share"><span>Share</span></Button>
                        </div> */}
                    </div>
                </div>
               <Snackbar open={this.state.open} autoHideDuration={2000} onClose={this.handleClose}>
                <Alert onClose={this.handleClose} severity="success">
                    Thank you for your donation!
                </Alert>
            </Snackbar>
            </div>
        )
    }
}

export default withRouter(FundraiserPage);