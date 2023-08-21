import * as React from 'react'
import { Link } from 'gatsby'
import { navLogo } from './navbar.module.css'
import { StaticImage } from 'gatsby-plugin-image'
import scrollToElement from 'scroll-to-element'

const Navbar = () => {
  const smoothLinkClick = (e, target) => {
    if (typeof window !== "undefined") {
        if (e) e.preventDefault()
        scrollToElement(target, {
          offset: -100, // Offsets fixed header
          duration: 1500,
        })
    }
  }
  
  return (
    <nav>
      <StaticImage class={navLogo} alt="personal logo" src="../images/logo.png"></StaticImage>
      <Link 
        onClick={e => smoothLinkClick(e, '#landing')} 
        to={"/#landing"}
      >
        Home
      </Link>
      <Link 
        onClick={e => smoothLinkClick(e, '#about')} 
        to={"/#about"}
      >
        About
      </Link>
    </nav>
  )
}

export default Navbar









