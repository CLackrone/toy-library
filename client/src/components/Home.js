import React from 'react'
import { Link } from 'react-router-dom'

const Home = () =>
  <div>
    <div className="container">
      <h1>Welcome to Toy Library</h1>
      <Link to='/toys'>Toys</Link>
    </div>
  </div>

export default Home