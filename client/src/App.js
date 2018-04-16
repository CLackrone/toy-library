import React, { Component } from 'react';
import Toys from './components/Toys'
import Home from './components/Home'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path="/toys" component={Toys} />
        </div>
      </Router>

    );
  }
}

export default App;
