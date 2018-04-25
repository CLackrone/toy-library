import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/toyActions'
import ToysList from '../components/ToysList'
import ToyShow from './ToyShow'

class ToysPage extends Component {

  componentWillMount() {
    const { actions } = this.props

    actions.fetchToys()
  }

//match is a JS object that contains the current url '/toys'
  render() {

    const { toys, match } = this.props

    return(
      <div>
        <ToysList toys={toys} />
        
        
      </div>
    )
  }
}


const mapStateToProps = state => {
  return { toys: state.toys }
}

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(ToysPage)

