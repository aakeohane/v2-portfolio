import React, {useEffect, useState} from 'react'
import Layout from '../components/layout'
import About from '../components/sections/about'
import Landing from '../components/sections/landing'
import Header from '../components/header'
import Work from '../components/sections/work'
import Contact from '../components/sections/contact'

const IndexPage = () => {
  const mainSections = [<Landing/>, <About/>, <Work/>, <Contact/>]

  const [offset, setOffset] = useState(0)

  useEffect(() => {
    // gatsby node environment doesnt allow referring to window, must do this for proper webpack build
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        setOffset(window.scrollY)
      }
    }
  }, []) //creates {offset} value for scroll position

  return (
    <Layout>
      <Header offset={offset}/>
        {mainSections.map((page, index) => (
          <div key={index} style={{minHeight: "100vh"}}>
            {page}
          </div>
        ))}
    </Layout>
  )
}

export const Head = () => <title>Aaron Keohane</title>

export default IndexPage