import * as React from 'react'
import { Link } from 'gatsby'
import { navContainer, navLogo } from './navbar.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Navbar = () => {
  return (
    <nav>
      <ul className={navContainer}>
        <li><StaticImage class={navLogo} src="../images/logo.png"></StaticImage></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar









