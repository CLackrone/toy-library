import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ToyCard extends Component {

  constructor(props) {
    super(props)

    this.state={
      count: 0
    }
  }

  handleCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

 
 render() {
  const { toy } = this.props

  return (
    <div key={toy.id} className='col-md-3 ToyCard text-center rounded'>
      <Link className='link' to={`/toys/${toy.id}`}>{toy.name}</Link><br />    
      {toy.image_url? (
        <img className='image' style={{height: '220px', width: '221px', margin: 'auto'}} src={`${toy.image_url}`} alt={toy.name} />
        ) : (
          <img src='https://x.kinja-static.com/assets/images/logos/placeholders/default.png'
            style={{height: '220px', width: '221px', margin: 'auto'}} alt={toy.name}/>
        )
      }
      <button onClick={() => this.handleCount()}>Like</button>
      <p>Counter: {this.state.count}</p>

    </div>
    )
  }
}

  
export default ToyCard

