import React, { Component } from 'react';
import Toys from '../containers/ToyList'
import Home from '../components//Home'
import NavBar from '../components/Navbar'
import ToyForm from '../containers/ToyForm'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route exact path='/toys' component={Toys} />
          <Route exact path='/new' component={ToyForm} />
        </div>
      </Router>

    );
  }
}

export default App;
