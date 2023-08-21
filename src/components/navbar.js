import React, {useEffect, useState} from 'react'
import { Link } from 'gatsby'
import { navLogo, glassomorph } from './navbar.module.css'
import { StaticImage } from 'gatsby-plugin-image'
import scrollToElement from 'scroll-to-element'

const Navbar = () => {

  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        setOffset(window.scrollY)
      }
    }
  }, [])
  
  let opacity = offset * .008 //increases glassomorphism behind nav as you scroll up
  
  const smoothLinkClick = (e, target) => {
    if (typeof window !== "undefined") {
        if (e) e.preventDefault()
        scrollToElement(target, {
          offset: -60, // Offsets fixed header
          duration: 500,
        })
    }
  }
  
  return (
    <div>
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
      <div className={glassomorph} style={{opacity: (opacity > 1) ? 1 : opacity}}></div>
    </div>

  )
}

export default Navbar









