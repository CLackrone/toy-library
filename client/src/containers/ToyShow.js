import React, {Component} from 'react'
import { connect } from 'react-redux'

class ToyShow extends Component {


  render() {
    console.log(this.ownProps)

    const { toy } = this.props
    console.log(this.props.toyId)
    return (
      <div className='container text-center'>
        <h3>Name: {toy.name}</h3>
        {toy.image_url? (
          <img src={`${toy.image_url}`} style={{height: '220px', width: '221px', margin: 'auto'}} alt={toy.name} />
          ) : (
            <img src='https://x.kinja-static.com/assets/images/logos/placeholders/default.png'
              style={{height: '220px', width: '221px', margin: 'auto'}} alt={toy.name}
              />
          )
        }
        <p>Description: {toy.description}</p>
        <p>Age Range: {toy.age_range}</p>
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

export default connect(mapStateToProps)(ToyShow)