import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <nav className='z-10 px-32 w-screen border flex justify-between align-middle items-center py-6 text-lg fixed bg-white shadow-sm'>
            <div className=''>
                <img src={logo} alt="revibe logo" loading='lazy' />
            </div>
            <div className=''>
                <ul className='flex gap-5 font-sans'>
                    <li className='hover:underline transition ease-in-out delay-150 duration-150'><a href="#hero">Home</a></li>
                    <li className='hover:underline transition ease-in-out delay-150 duration-150'><a href="#about">About</a></li>
                    <li className='hover:underline transition ease-in-out delay-150 duration-150'><a href="#product">Product</a></li>
                    <li className='hover:underline transition ease-in-out delay-150 duration-150'><a href="#howto">How to</a></li>
                    <li className='hover:underline transition ease-in-out delay-150 duration-150'><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar