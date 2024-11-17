import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import HowTo from './components/HowTo'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <HowTo />
      <Contact />
    </div>
  )
}

export default App