import React, { Component } from 'react';
import Toys from './Toys'
import Home from './Home'
import NavBar from './Navbar'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route exact path="/toys" component={Toys} />
        </div>
      </Router>

    );
  }
}

export default App;
