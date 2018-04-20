import React from 'react'

const ToyCard = ({ toy }) => 
  <div key={toy.id} className='container text-center'>
    <p>Toy Name: {toy.name}</p>
    <p>Age Range: {toy.age_range}</p>
    <p>Description: {toy.description} </p>
    <img src={`${toy.image_url}`} style={{height: '220px', width: '221px', margin: 'auto'}} alt={toy.name} />
  </div>
  
export default ToyCard

