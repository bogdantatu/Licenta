import React from 'react';

import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import classes from './UserFundraiser.module.css';

const userFundraiser = ({props}) => (

    <div className={classes.userFundraiser}>
            <img src="https://files.globalgiving.org/pfil/5871/pict_large.jpg?m=1278086819000" alt="imagine"/>
            <div className={classes.userFundraiserDetails}>
                <div className={classes.Title}>{props.titlu}</div>
                <div className={classes.Description}>{props.descriereScurta}</div>
            </div>
            <div className={classes.Buttons}>
                <div className={classes.ProgressBar}></div>
                <div className={classes.Status}>ACTIVE</div>
                <Button><EditIcon/></Button>
                <Button><DeleteIcon/></Button>
                    
            </div>
        </div>
)

export default userFundraiser;