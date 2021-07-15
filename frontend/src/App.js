import React, { Component } from 'react';
import { Switch } from 'react-router-dom'

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
import AddFundraiser from './components/Fundraising/AddFundraiser/AddFundraiser'
import FundraiserPage from './components/Fundraising/FundraiserPage/FundraiserPage';
import UserFundraisers from './components/Fundraising/UserFundraisers/UserFundraisers'
import EditFundraiser from './components/Fundraising/FundraiserPage/EditFundraiser/EditFundraiser'
import SharingList from './containers/Sharing/SharingList';
import AddPost from './components/Sharing/AddPost/AddPost';
import SearchFundraising from './components/Search/SearchFundraising/SearchFundraising';

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
            <PublicRoute restricted={true} component={Login} path="/" exact />
            <PublicRoute restricted={true} component={Register} path="/register" exact />
            <Layout>
              <PrivateRoute component={FundraisingList} path="/fundraising"  exact />
              <PrivateRoute component={UserFundraisers} path="/myfundraisers" exact />
              <PrivateRoute component={AddFundraiser} path="/addfundraiser"  exact />
              <PrivateRoute component={FundraiserPage} path="/campanie/:id"  exact />
              <PrivateRoute component={EditFundraiser} path="/editfundraiser/:id" exact />
              <PrivateRoute component={SharingList} path="/sharing"  exact />
              <PrivateRoute component={AddPost} path="/addpost"  exact />
              <PrivateRoute component={ProfilePage} path="/profile" exact />
              <PrivateRoute component={SearchFundraising} path="/search/find=?:keyword" exact />
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