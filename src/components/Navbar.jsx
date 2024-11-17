import React, { useState } from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='fixed z-10 flex items-center justify-between w-screen px-4 py-4 text-lg bg-white border shadow-sm sm:px-8 md:px-16 lg:px-32 md:py-6'>
            <div className='flex-shrink-0'>
                <img src={logo} alt="revibe logo" loading='lazy' className='h-8 md:h-10' />
            </div>
            <div className='hidden md:flex'>
                <ul className='flex gap-3 font-sans sm:gap-5'>
                    <li className='transition duration-150 ease-in-out delay-150 hover:underline'><a href="#hero">Home</a></li>
                    <li className='transition duration-150 ease-in-out delay-150 hover:underline'><a href="#about">About</a></li>
                    <li className='transition duration-150 ease-in-out delay-150 hover:underline'><a href="#product">Product</a></li>
                    <li className='transition duration-150 ease-in-out delay-150 hover:underline'><a href="#howto">How to</a></li>
                    <li className='transition duration-150 ease-in-out delay-150 hover:underline'><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='text-gray-500 hover:text-gray-700 focus:outline-none'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className='absolute left-0 w-full bg-white shadow-md top-16 md:hidden'>
                    <ul className='flex flex-col items-center gap-3 py-4 font-sans'>
                        <li className='transition duration-150 ease-in-out delay-150 hover:underline'><a href="#hero">Home</a></li>
                        <li className='transition duration-150 ease-in-out delay-150 hover:underline'><a href="#about">About</a></li>
                        <li className='transition duration-150 ease-in-out delay-150 hover:underline'><a href="#product">Product</a></li>
                        <li className='transition duration-150 ease-in-out delay-150 hover:underline'><a href="#howto">How to</a></li>
                        <li className='transition duration-150 ease-in-out delay-150 hover:underline'><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar