import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'


import Layout from './hoc/Layout/Layout';
import Aux from './hoc/Aux/Aux'
import Login from './components/Authentication/Login/Login';
import Register from './components/Authentication/Register/Register';
// import LoginRegister from './containers/Authentication/LoginRegister';
import FundraisingList from './containers/Fundraising/FundraisingList'

class App extends Component {
  render() {
    return (
      <div>
        <Aux>
          <Switch>
            <Route path="/register" component={Register}/>
            <Route path="/login" exact component={Login}/>
            {/* <Route exact
                   path='/login'
                   render={() =>
                    this.props.currentUser ? (<Redirect to='/'/>) : (<LoginRegister />)
                    }/> */}
            <Layout>
              <Route path="/fundraising" component={FundraisingList}/>
            </Layout>
          </Switch>
        </Aux> 
      </div>
    );
  }
}

export default App;
