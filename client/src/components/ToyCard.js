import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { updateToyLikes } from '../actions/toyActions'
import { connect } from 'react-redux'


class ToyCard extends Component {

  handleLike = toy => {
    this.props.updateToyLikes(toy)
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


        <button onClick={() => this.handleLike(toy)}>Like</button>
        <p>Likes: {toy.likes}</p>

      </div>
    )
  }
}

export default connect(null, { updateToyLikes })(ToyCard)