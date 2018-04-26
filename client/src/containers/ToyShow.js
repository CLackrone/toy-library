import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/toyActions'
import ToyShowUI from '../components/ToyShowUI'


class ToyShow extends Component {

  deleteToy = event => {

    const { actions } = this.props
    //debugger
    const toyToDelete = parseInt(this.props.match.params.toyId, 10)
    actions.deleteToy(toyToDelete)
  }



  render() {

    const { toy } = this.props

    return(
      <div>
        <ToyShowUI toy={toy} />
      </div>
    )
  }
}
  
const mapStateToProps = (state, ownProps) => {
  const toy = state.toys.find(toy => toy.id === parseInt(ownProps.match.params.toyId, 10))

  if (toy) {
    return { toy }
  } else {
    return {toy: {} }
  }
}

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps)(ToyShow)