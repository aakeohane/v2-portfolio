import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { whale } from './contact.module.css'


const Contact = () => {
  
  return (
    <div id="contact">
      <h1>
        Contact
      </h1>
      <p>
        email: aacunty@gmail.com
      </p>
      <StaticImage className={whale} alt="watercolor whale" src="../../images/whale-watercolor.png"></StaticImage>
    </div>
  )
}

export default Contact