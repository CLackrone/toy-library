import React from 'react'
import ToyCard from './ToyCard'

const ToysList = ({ toys }) => {

  // handleLike = e => {

  // }


  const renderToys = toys.map((toy, i) => 
    <ToyCard key={i} toy={toy}  />
  )

  return (
    <div className='container-fluid'>
      <div className='row'>
        {renderToys}
      </div>
    </div>
  )
}

export default ToysList

