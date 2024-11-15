import React from 'react'


const Card = ({ icon, title, caption }) => {
  return (
    <div className='border p-4 rounded'>
        {icon}
        <h1 className='font-bold'>{title}</h1>
        <p className='text-gray-400'>{caption}</p>
    </div>
  )
}

export default Card