import * as React from 'react'
import Layout from '../components/layout'
import About from '../components/sections/about'
import Landing from '../components/sections/landing'
import Header from '../components/header'

const IndexPage = () => {
  const mainLayout = [<Landing/>, <About/>]

  return (
    <Layout>
      <Header/>
      {mainLayout.map((page, index) => (
        <div id={`container${index}`} key={index} style={{minHeight: "100vh"}}>
          {page}
        </div>
      ))}
    </Layout>
  )
}

export const Head = () => <title>Aaron Keohane</title>

export default IndexPage