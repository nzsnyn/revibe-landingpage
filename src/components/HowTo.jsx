import React from 'react'
import tutor from '../assets/how.png'

const HowTo = () => {
    return (
        <div>
            <h1 className='font-bold text-center text-4xl mt-9'>How it works</h1>
            <img className='w-3/6 mx-auto mt-10' src={tutor} alt="How to" />

            <div className='my-14 flex align-middle justify-center'>
                <a className='text-2xl rounded-md bg-green-500 text-white font-bold px-12 py-1' href="https://revibecart.com">Get Started</a>
            </div>
        </div>
    )
}

export default HowTo