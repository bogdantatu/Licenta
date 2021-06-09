import React from 'react';
import { Route, Redirect } from 'react-router-dom';


import {connect} from 'react-redux';


const PublicRoute = ({component: Component, restricted, loggedUser, ...rest}) => {
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            restricted && loggedUser ?
                <Redirect to="/fundraising" />
            : <Component {...props} />
        )} />
    );
};

const mapStateToProps = ({user}) => ({
    loggedUser: user.loggedUser
  })
  

  
export default connect(mapStateToProps)(PublicRoute);