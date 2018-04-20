import React, { Component } from 'react';
import ToysPage from '../containers/ToysPage'
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
          <Route exact path='/toys' component={ToysPage} />
          <Route exact path='/toys/new' component={ToyForm} />
          
        </div>
      </Router>

    );
  }
}

export default App;
