import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/toyActions'
import ToyCard from '../components/ToyCard'

class Toys extends Component {

  componentWillMount() {
    const { actions } = this.props

    actions.fetchToys()
  }

  render() {

    const { toys } = this.props

    const allToys = toys.map((toy, i) => {
      return <ToyCard key={i} toy={toy} />
    })

    return(
      <div>
        { allToys }
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

export default connect(mapStateToProps, mapDispatchToProps)(Toys)
