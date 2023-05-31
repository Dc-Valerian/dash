import React from 'react'
import About from './About'
import Services from './Services'
import Home from './Home'
import Features from './Features'
import Blog from './Blog'
import Contact from './Contact'

const HomeScreen = () => {
  return (
    <div>
      <Home/>
        <About/>
        <Services/>
        <Contact/>
        <Features/>
    </div>
  )
}

export default HomeScreen