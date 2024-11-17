import React from 'react'
import tutor from '../assets/how.png'

const HowTo = () => {
    return (
        <div className='p-4' id='howto'>
            <h1 className='text-2xl font-bold text-center sm:text-3xl md:text-4xl mt-9'>How it works</h1>
            <img className='w-full mx-auto mt-10 sm:w-5/6 md:w-4/6' src={tutor} alt="How to" />

            <div className='flex justify-center align-middle my-14'>
                <a className='px-8 py-1 text-lg font-bold text-white bg-green-500 rounded-md sm:px-10 md:px-12 sm:text-xl md:text-2xl' href="https://revibecart.com">Get Started</a>
            </div>
        </div>
    )
}

export default HowTo