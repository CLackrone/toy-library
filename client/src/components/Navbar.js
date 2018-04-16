import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div className="container">
      <Link className="navbar-brand" to="/">Toy Library</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/toys">Toys <span className="sr-only">(current)</span></Link>
            </li>
            
          </ul>
          
        </div>
      </div>
    </nav>
  )
}

export default NavBar