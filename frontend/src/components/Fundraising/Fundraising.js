import React from 'react';

import classes from './Fundraising.module.css';
import Button from '../UI/Button/Button'

const fundraising = (props) => (
    <div className={classes.Fundraising}>
        <div className={classes.btnContainer}>
            <Button />
            <Button />
        </div>
    </div>
);

export default fundraising;