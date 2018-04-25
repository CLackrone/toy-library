import React from 'react'
import { Link } from 'react-router-dom'

const ToyCard = ({ toy }) => 
  <div><br />
  <div key={toy.id} className='container text-center'>
    <Link to={`/toys/${toy.id}`}>{toy.name}</Link><br />    
    {toy.image_url? (
      <img src={`${toy.image_url}`} style={{height: '220px', width: '221px', margin: 'auto'}} alt={toy.name} />
      ) : (
        <img src='https://x.kinja-static.com/assets/images/logos/placeholders/default.png'
          style={{height: '220px', width: '221px', margin: 'auto'}} alt={toy.name}
          />
      )
  }
  </div>
  <br />
  </div>

  
export default ToyCard


// <p>Age Range: {toy.age_range}</p>
//     <p>Description: {toy.description} </p>