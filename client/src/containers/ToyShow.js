import React from 'react'
import { connect } from 'react-redux'

const ToyShow = ({toy}) => {
    console.log({toy})


  return (
    <div>
      <h3>Name: {toy.name}</h3>
    </div>
  )
}
  
const mapStateToProps = (state, ownProps) => {
  const toy = state.toys.find(toy => toy.id === ownProps.match.params.toyId)

  if (toy) {
    return { toy }
  } else {
    return {toy: {} }
  }
}

export default connect(mapStateToProps)(ToyShow)