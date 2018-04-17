import React from 'react'
import { Link } from 'react-router-dom'

const Home = () =>
  <div>
    <div className="container">
      <h1>Welcome to Toy Library</h1>
      <p>A great place to keep track of your playroom toys and games</p>
      <img src='https://imgur.com/UvAu9Su.jpg' 
        style={{height: '220px', width: '221px', margin: 'auto'}} 
        alt='missing-image' />
        <br></ br>
      <Link to='/toys'>View All Toys</Link>
    </div>
  </div>

export default Home

//add link to ToyForm when generated