import React from 'react'
import { Link } from 'gatsby'
import { navLogo, glassomorph } from './navbar.module.css'
import { StaticImage } from 'gatsby-plugin-image'
import scrollToElement from 'scroll-to-element'

const Navbar = ({offset}) => {
  
  let opacity = offset * .008 //increases glassomorphism behind nav as you scroll up
  
  const smoothLinkClick = (e, target) => {
    if (typeof window !== "undefined") {
        if (e) e.preventDefault()
        scrollToElement(target, {
          offset: -90, // Offsets fixed header
          ease: 'out-quint',
          duration: 1000,
        })
    }
  }
  
  return (
    <div>
      <nav>
        <Link 
          style={{marginRight: "auto"}}
          onClick={e => smoothLinkClick(e, '#landing')} 
          to={"/#landing"}
        >
          <StaticImage class={navLogo} alt="personal logo" src="../images/Initials.png"></StaticImage>
        </Link>
        <Link 
          onClick={e => smoothLinkClick(e, '#about')} 
          to={"/#about"}
        >
          About,
        </Link>
        <Link 
          onClick={e => smoothLinkClick(e, '#work')} 
          to={"/#work"}
        >
          Werk,
        </Link>
        <Link 
          onClick={e => smoothLinkClick(e, '#contact')} 
          to={"/#contact"}
        >
          Contact
        </Link>
      </nav>
      <div className={glassomorph} style={{opacity: (opacity > 1) ? 1 : opacity}}></div>
    </div>

  )
}

export default Navbar









