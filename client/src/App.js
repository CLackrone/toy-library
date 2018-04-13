import React, { Component } from 'react';
import Toys from './components/Toys'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Toy Library</h1>
        <Toys />
      </div>

    );
  }
}

export default App;
