import React from 'react'
import { Link } from 'react-router-dom'

const ToyCard = ({ toy }) => 
    <div key={toy.id} className='col-md-3 ToyCard text-center rounded'>
      <Link className='link' to={`/toys/${toy.id}`}>{toy.name}</Link><br />    
      {toy.image_url? (
        <img className='image' style={{height: '220px', width: '221px', margin: 'auto'}} src={`${toy.image_url}`} alt={toy.name} />
        ) : (
          <img src='https://x.kinja-static.com/assets/images/logos/placeholders/default.png'
            style={{height: '220px', width: '221px', margin: 'auto'}} alt={toy.name}/>
        )
      }
  </div>

  
export default ToyCard

