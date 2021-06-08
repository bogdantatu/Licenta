import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'



import {setLoggedUser} from './store/User/action'
import {connect} from 'react-redux';
import firebase from './firebase'


import Layout from './hoc/Layout/Layout';
import Aux from './hoc/Aux/Aux'
import Login from './components/Authentication/Login/Login';
import Register from './components/Authentication/Register/Register';
import LoginRegister from './containers/Authentication/LoginRegister';
import FundraisingList from './containers/Fundraising/FundraisingList'
import ProfilePage from './containers/Profile/ProfilePage'
import axios from 'axios';


class App extends Component {

  logOut = null;

  delayRender = (ms) => {
    const date=Date.now()
    let currentDate = null;
    console.log("a inceput)")
    do{
      currentDate=Date.now;
    }while(currentDate-date <ms)
    console.log('gata')
  }

  
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
            <Route path="/" exact component={Login}/>
            {/* <Route exact path='/'>
                    {this.props.loggedUser ? <Redirect to="/fundraising" /> : <LoginRegister />}
                    
            </Route> */}
            <Layout>
              <Route path="/fundraising" component={FundraisingList}/>
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
