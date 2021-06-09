import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'



import {setLoggedUser} from './store/User/action'
import {connect} from 'react-redux';
import firebase from './firebase'
import PrivateRoute from './hoc/Routes/PrivateRoute'
import PublicRoute from'./hoc/Routes/PublicRoute'

import Layout from './hoc/Layout/Layout';
import Aux from './hoc/Aux/Aux'
import Login from './components/Authentication/Login/Login';
import Register from './components/Authentication/Register/Register';
import FundraisingList from './containers/Fundraising/FundraisingList'
import ProfilePage from './containers/Profile/ProfilePage'



class App extends Component {

  logOut = null;
  componentDidMount(){
    const {setLoggedUser} = this.props
    this.logOut = firebase.auth().onAuthStateChanged(user => {
      if(!user){
        setLoggedUser(user)
      }
    })
  }

  componentWillUnmount(){
    this.logOut()
  }

  render() {
    
    return (
      <div>
        <Aux>
          <Switch>
            <Route path="/register" component={Register}/>
            {/* <Route path="/" exact component={Login}/> */}
            <PublicRoute restricted={true} component={Login} path="/" exact />
            <Layout>
              {/* <Route path="/fundraising" component={FundraisingList}/> */}
              <PrivateRoute component={FundraisingList} path="/fundraising" exact />
              <Route path="/profile" component={ProfilePage}/>
            </Layout>
          </Switch>
        </Aux> 
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  loggedUser: user.loggedUser
})

const mapDispatchToProps = dispatch => (
  {
      setLoggedUser: user => dispatch(setLoggedUser(user))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);