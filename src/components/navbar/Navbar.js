import React from 'react'
import {Link} from 'react-router-dom'

import './Navbar.css'


class Navbar extends React.Component {

  render() {

    return (<div>
      <nav id="navbar">

        <h2>
          <li>
            <Link to="/" className='home'>Home</Link>
          </li>
          <li>
            <Link to="/the_experience" className='projects'>The Experience
              
            </Link>
          </li>
          <li>
            <Link to="/pricing" className='pricing'>Pricing</Link>
          </li>
          <li>
            <Link to="/about_us" className='about_us'>About Us</Link>
          </li>
          <li>
            <Link to="/login" className='login'>Login</Link>
          </li>
        </h2>

      </nav>

    </div>)
  }
}

export default Navbar
