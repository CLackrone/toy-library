import React, {Component} from 'react'
import { connect } from 'react-redux'

class ToyShow extends Component {


  render() {
    console.log(this.ownProps)

    const { toy } = this.props
    console.log(this.props.toyId)
    return (
      <div>
        <h3>Name: {toy.name}</h3>
      </div>
    )
  }
}
  
const mapStateToProps = (state, ownProps) => {
  const toy = state.toys.find(toy => toy.id === parseInt(ownProps.match.params.toyId))

  if (toy) {
    return { toy }
  } else {
    return {toy: {} }
  }
}

export default connect(mapStateToProps)(ToyShow)