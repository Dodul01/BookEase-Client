import React from 'react'

const NewsLetter = () => {
  return (
    <div className='max-w-7xl mx-auto my-5 p-2'>
      <h1 className='text-3xl font-bold text-center mb-1'>Save Time, Save Money</h1>
      <h3 className='text-2xl font-semibold text-center'>Subscribe Our News Letter</h3>
      <div className='flex item-center justify-center mt-4'>
        <input className='border border-[#34977d] lg:max-w-md w-full p-2 rounded-l-lg focus:outline-[#34977d]' type="text" placeholder='Email Address'/>
        <button className='text-white bg-[#34977d] p-2 rounded-r-lg font-semibold'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
