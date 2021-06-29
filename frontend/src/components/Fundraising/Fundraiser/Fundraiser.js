import React from 'react';

import Button from '@material-ui/core/Button';



import classes from './Fundraiser.module.css';

const fundraiser = ({props}) => (

    <div className={classes.Fundraiser}>
            <img src="https://files.globalgiving.org/pfil/5871/pict_large.jpg?m=1278086819000" alt="imagine"/>
            <div className={classes.FundraiserDetails}>
                <div className={classes.Title}>{props.titlu}</div>
                <div className={classes.Description}>{props.descriereScurta}</div>
            </div>
            <div className={classes.FundraiserViewMore}>
                <div className={classes.ProgressBar}></div>
                <Button className={classes.btnViewMore}>
                    <span>View more</span>
                </Button>
            </div>
        </div>
)

export default fundraiser;