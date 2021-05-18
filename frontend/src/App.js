import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Layout from './hoc/Layout/Layout';
import Aux from './hoc/Aux/Aux'
import Login from './components/Authentication/Login/Login'
import Register from './components/Authentication/Register/Register'



class App extends Component {
  render() {
    return (
      <Aux>
        <Switch>
          {/* <Route path="/" component={Login}/> */}
          <Route path="/" component={Register}/>
        </Switch>
      </Aux> 
    
    );
  }
}

export default App;
