import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
            <a href="" className="navbar-brand">My Project</a>
            <button data-bs-toggle="collapse" data-bs-target="#menu" className="navbar-toggler">
              <span className="navbar-toggler-icon">

              </span>
            </button>

            <div className="collapse navbar-collapse" id="menu">
              <ul className="nav navbar-nav">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">About</NavLink>
                </li>
              </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header