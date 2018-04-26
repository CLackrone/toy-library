import React from 'react'

const ToyShowUI = ({ toy }) => 
  
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
        <button onClick={this.deleteToy}>Remove Toy</button>
      </div>
    
export default ToyShowUI