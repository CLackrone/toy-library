import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class ToyCard extends Component {

  handleLike = () => {
    //fill in later
  }
 
  render() {
    const { toy } = this.props
    console.log(toy)

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


        <button onClick={this.handleLike}>Like</button>
        <p>Counter: {toy.likes}</p>

      </div>
    )
  }

}

export default ToyCard

// const mapStateToProps = state => {
//   return { likes: state.toy.likes }
// }

  
//export default connect(mapStateToProps)(ToyCard)



