import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import { ProgressBar } from 'primereact/progressbar';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';

import Button from '../../UI/Button/Button'
import classes from './FundraiserPage.module.css';

class FundraiserPage extends Component{
    render(){
        return(
            <div className={classes.FundraiserPage}>
                <div className={classes.TitleArea}>
                    <h1>Save the Whales</h1>
                    <h3>We're creating this campaign to raise funds for the whales</h3>
                </div>
                <div className={classes.Details}>
                    <div>
                        <img src="https://files.globalgiving.org/pfil/5871/pict_large.jpg?m=1278086819000" alt="imagine"></img>
                    </div>
                    <div>
                        <h3>Description:</h3>
                        <p>In order to save as many endagered whales as we can, we need to raise a considerable amount of funds. We will use those funds to reduce ocean pollution!</p>
                    </div>
                    <div>
                        <h3>Contact: </h3>
                        <p>Email: whales@ocean.com</p>
                    </div>
                </div>
                <div className={classes.Progress}>
                    <h3>Goal status:</h3>
                    <ProgressBar value={50}/>
                    <div className={classes.ButtonContainer}>
                    <div className={classes.Button}>
                        <Button><span>Donate</span></Button>
                    </div>
                    <div className={classes.btnShare}>
                    <Button><span>Share</span></Button>
                    </div>
                </div>
                </div>
               
            </div>
        )
    }
}

export default withRouter(FundraiserPage);