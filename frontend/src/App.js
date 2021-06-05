import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Layout from './hoc/Layout/Layout';
import Aux from './hoc/Aux/Aux'
import LoginContainer from './containers/Authentication/LoginContainer/LoginContainer';
import RegisterContainer from './containers/Authentication/RegisterContainer/RegisterContainer'



class App extends Component {
  render() {
    return (
      <div>
        <Aux>
          <Switch>
            <Route path="/register" component={RegisterContainer}/>
            <Route path="/" exact component={LoginContainer}/>
          </Switch>
        </Aux> 
      </div>
    
    );
  }
}

export default App;
