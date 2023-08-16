import * as React from 'react'
import Navbar from './navbar'
import { container } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <Navbar/>
      {/* Header - put navbar in header and/or sidebar based on windowwidth */}
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      {/* Footer */}
    </div>
  )
}

export default Layout