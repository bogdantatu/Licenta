import React from 'react';

import Button from '@material-ui/core/Button';
import MoreVertIcon from '@material-ui/icons/MoreVert';


import classes from './Fundraiser.module.css';

const fundraiser = ({props}) => (

    <div className={classes.Fundraiser}>
            <img src="" alt="imagine"/>
            <div className={classes.FundraiserDetails}>
                <div className={classes.Title}>{props.titlu}</div>
                <div className={classes.Description}>{props.descriereScurta}</div>
            </div>
            <div className={classes.FundraiserViewMore}>
                <div className={classes.ProgressBar}></div>
                <Button 
                    className={classes.btnViewMore}
                    startIcon={<MoreVertIcon />}>View more</Button>
            </div>
        </div>
)

export default fundraiser;