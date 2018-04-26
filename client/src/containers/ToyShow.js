import React, {Component} from 'react'
import { connect } from 'react-redux'
import { deleteToy } from '../actions/toyActions'
import ToyShowUI from '../components/ToyShowUI'


class ToyShow extends Component {

  handleOnClick = toy => {
    this.props.deleteToy(toy)
  }
  

  render() {

    const { toy } = this.props

    return(
      <div>
        <ToyShowUI toy={toy} handleOnClick={this.handleOnClick} />
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

const mapDispatchToProps = {
  deleteToy,
}

export default connect(mapStateToProps, mapDispatchToProps)(ToyShow)