import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Hello. My name is Aaron Keohane.">
      <p>
        Welcome to my portfolio. I'm a web developer based 
        in sunny San Diego. Passionate about finding the right 
        solution, with a strong multi-disciplinary background, 
        you can be sure I will think imaginatively when finding 
        yours.
      </p>
    </Layout>
  )
}

export const Head = () => <title>Aaron Keohane</title>

export default IndexPage