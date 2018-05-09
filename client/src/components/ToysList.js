import React from 'react'
import ToyCard from './ToyCard'

const ToysList = ({ toys }) => {

//sort function to be integrated later
  const sortedToys = toys.sort((a, b) => {
      return b.likes - a.likes
    })

//filter function to be integrated later
  const filteredToys = toys.filter(toy => toy.likes > 10)


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

