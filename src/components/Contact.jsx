import React, { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `mailto:revibecart@gmail.com?subject=Contact Form Submission&body=Name: ${name}%0D%0AMessage: ${message}`;
    }

    return (
        <div className='w-full px-4 mx-auto md:w-3/4'>
            <h1 className='pt-4 pb-4 text-2xl font-bold md:text-4xl md:pt-8 md:pb-6'>Contact Us</h1>
            <p className='mb-4 text-lg font-light md:text-2xl md:mb-6'>send us a message</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Your Name</label><br />
                <input
                    type="text"
                    id="name"
                    className='w-full mb-4 border rounded'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                /><br />
                <label htmlFor="message">Your Message</label><br />
                <input
                    type="text"
                    id="message"
                    className='w-full mb-4 border rounded'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                /><br />
                <button type="submit" className='px-4 py-2 mb-10 text-white bg-blue-500 rounded'>Send Message</button>
            </form>
        </div>
    )
}

export default Contact