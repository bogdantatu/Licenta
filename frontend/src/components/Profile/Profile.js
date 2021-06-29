import React from 'react';
import classes from './Profile.module.css';

import firebase from '../../firebase'
import Button from '@material-ui/core/Button';

const profile = (props) => (
    <div className={classes.Profile}>
        Profilul meu
        <Button onClick={() => firebase.auth().signOut()}>Log out</Button>
    </div>
);
export default profile;