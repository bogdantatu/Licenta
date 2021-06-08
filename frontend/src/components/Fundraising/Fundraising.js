import React from 'react';

import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import VisibilityIcon from '@material-ui/icons/Visibility';

import classes from './Fundraising.module.css';
import Fundraiser from './Fundraiser/Fundraiser'


const fundraising = (props) => (
    <div className={classes.Fundraising}>
        <div className={classes.btnContainer}>
            <Button 
                className={classes.btnAdd}
                startIcon={<AddCircleIcon/>}>
                Create a fundraiser
            </Button>
            <Button 
                className={classes.btnView}
                startIcon={<VisibilityIcon/>}>
                View your campaigns
            </Button>
        </div>
        <div className={classes.Fundraisers}>
            <ul>
                <Fundraiser name="Salvati balenele" shortDescription="Impreuna salvam balenele"/>
            </ul>
        </div>
    </div>
);

export default fundraising;