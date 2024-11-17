import React from 'react'
import hero from '../assets/hero.png'

const Hero = () => {
    return (
        <div id='hero'>
            <img className='pt-24 mx-auto rounded-sm' src={hero} alt="Hero Image" />
        </div>
    )
}

export default Hero