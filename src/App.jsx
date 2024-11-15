import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import HowTo from './components/HowTo'

const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <HowTo />
    </div>
  )
}

export default App