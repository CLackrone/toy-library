import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/toyActions'
//import ToyCard from '../components/ToyCard'
import ToysList from '../components/ToysList'

class ToysPage extends Component {

  componentWillMount() {
    const { actions } = this.props

    actions.fetchToys()
  }

  render() {

    const { toys } = this.props

    //move this to ToysList
    // const allToys = toys.map((toy, i) => {
    //   return <ToyCard key={i} toy={toy} />
    // })

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
