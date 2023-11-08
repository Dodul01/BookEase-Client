import React from 'react'
import { Helmet } from 'react-helmet-async'

const AboutUs = () => {
  return (
    <div className='mt-6 min-h-screen max-w-7xl mx-auto'>
      <Helmet>
        <title>BookEase - About Us</title>
      </Helmet>


      <div>
        <h2 className='text-xl font-semibold mb-2'>Our Story</h2>
        <p className='text-lg text-gray-500 mb-4'>
          Established in 2005, our hotel was founded with a vision to provide a luxurious and comfortable retreat for travelers worldwide. Over the years, we have strived to create a warm and inviting atmosphere, making every guest feel at home.
        </p>

        <h2 className='text-xl font-semibold'>History</h2>
        <p className='text-lg text-gray-500 mb-4'>
          Rooted in the rich cultural heritage of our location, our hotel has played a significant role in preserving the local history. We have stood the test of time, witnessing the evolution of our surroundings while maintaining our commitment to excellence in hospitality.
        </p>

        <h2 className='text-xl font-semibold'>Mission</h2>
        <p className='text-lg text-gray-500 mb-4'>
          Our mission is to exceed the expectations of our guests by delivering unparalleled service, ensuring their comfort, and creating memorable experiences that linger long after their stay. We strive to be a benchmark in the hospitality industry through our dedication to quality and innovation.
        </p>

        <div className='flex items-center justify-center'>
          <img className='h-[400px] object-cover w-[60vw]' src="https://media.istockphoto.com/id/1164197127/photo/cheerful-latin-american-team-of-hotel-staff-all-facing-camera-smiling.webp?b=1&s=170667a&w=0&k=20&c=dpRMSVaA_gUA77xPljOxrSRFFq74cfr17WtuvrfQCnU=" alt="" />
        </div>
        <h2 className='text-xl font-semibold'>Management Team</h2>
        <p className='text-lg text-gray-500 mb-4'>
          Meet our esteemed management team, a group of passionate individuals dedicated to upholding our values of exceptional service and guest satisfaction. With years of experience in the hospitality sector, they bring a wealth of knowledge and leadership to ensure the success and continued excellence of our hotel.
        </p>
      </div>
    </div>
  )
}

export default AboutUs
