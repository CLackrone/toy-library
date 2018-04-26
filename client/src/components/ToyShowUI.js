import React from 'react'

const ToyShowUI = ({ toy, handleOnClick }) => 
  
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
      <button onClick={() => handleOnClick(toy)}>Remove Toy</button>
    </div>
  

    
export default ToyShowUI



// deleteToy = event => {

//     const { actions } = this.props
//     //debugger
//     const toyToDelete = parseInt(this.props.match.params.toyId, 10)
//     actions.deleteToy(toyToDelete)
//   }