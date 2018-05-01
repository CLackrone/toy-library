import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/toyActions'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//components
import ToysList from '../components/ToysList'
import Home from '../components//Home'
import NavBar from '../components/Navbar'
import ToyForm from '../containers/ToyForm'
import ToyShow from './ToyShow'

class App extends Component {

  componentDidMount() {
    const { actions } = this.props

    actions.fetchToys()
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Switch>
            <Route exact path='/toys' render={(props) => <ToysList toys={this.props.toys}/>} />
            <Route exact path='/toys/new' component={ToyForm} />
            <Route exact path='/toys/:toyId' component={ToyShow} />
            <Route exact path='/toys/:toyId/edit' component={ToyForm} />
          </Switch>
        </div>
      </Router>

    );
  }
}

//<Route render={<Component {...props} />} />

const mapStateToProps = state => {
  return { toys: state.toys }
}

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)