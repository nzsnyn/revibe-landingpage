import React from 'react'
import hero from '../assets/hero.png'

const Hero = () => {
    return (
        <div id='home'>  
            <img className='pt-24  rounded-sm mx-auto' src={hero} alt="Hero Image" />
        </div>
    )
}

export default Hero