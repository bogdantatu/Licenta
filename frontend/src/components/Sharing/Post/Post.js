import React from 'react';

import classes from './Post.module.css';

const post = (props) => (
    <div onClick={props.clicked} className={classes.Post}>
        <div className={classes.Image}>
            <img src={props.img} alt=""></img>
        </div>
        <div className={classes.Details}>
            <div className={classes.Title}>
                {props.title}
            </div>
            <div className={classes.User}>
                {props.user}
            </div>
        </div>
    </div>
);
export default post;