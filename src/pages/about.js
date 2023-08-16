import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <h2>How did I know I was destined for coding?</h2>
      <p>
        I am always the first to google the moment someone asks a question.
        Besides my googling talent, my academic background in the sciences 
        has prepared me to problem solve, critically evaluate, and think 
        imaginatively when facing technical challenges. Thankfully, my seemingly 
        perpetual need to know is the perfect characteristic for someone in the 
        tech field and I am ready to keep on learning! I aim to inspire positive 
        environmental change through my work. I love the ocean, typography and 
        living a zero waste lifestyle. When I'm not obsessing about responsive 
        design, you can find me on the tennis courts. Take a peak at my CV below.
      </p>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage