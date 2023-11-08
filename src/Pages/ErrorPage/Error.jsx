import React from 'react'
import img from './errorimg.png';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='mt-6 min-h-screen'>
      <div className='flex items-center flex-col justify-center'>
        <img className='h-[70vh] mx-auto' src={img} alt="" />
        <Link className='text-white bg-[#34977d] flex items-center justify-center h-10 w-[120px] font-semibold p-2 rounded-full' to='/'>Go Home</Link>
      </div>
    </div>
  )
}

export default Error
