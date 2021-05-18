import React, { Component } from 'react';
// import Layout from './hoc/Layout/Layout';
import Aux from './hoc/Aux/Aux'
import Authentication from './containers/Authentication/Authentication';



class App extends Component {
  render() {
    return (
      <Aux>
      <Authentication/>
       {/* <Layout/> */}
      </Aux> 
    
    );
  }
}

export default App;
