import React from 'react'
import ToyCard from './ToyCard'

const ToysList = ({ toys }) => {
  const renderToys = toys.map((toy, i) => 
    <ToyCard key={i} toy={toy} />
  )

  return (
    <div>
      {renderToys}
    </div>
  )
}

export default ToysList

