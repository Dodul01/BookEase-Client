import React from 'react'
import { Link } from 'react-router-dom';

const FeaturedRoomCard = ({ featuredRoom }) => {
  const { property, price_per_night, description, room_images, special_offers } = featuredRoom;

  return (
    <div className='shadow-2xl rounded-xl'>
      <div className='relative'>
        {special_offers !== '' ?
          <p className='absolute top-2 right-2 font-semibold bg-slate-900 text-white p-1 max-w-[320px] rounded-lg'>{special_offers}</p>
          :
          ''
        }
        <img className='w-full h-[250px] object-cover bg-center mb-1 rounded-t-xl' src={room_images} alt="" />
      </div>
      <div className='p-2 flex flex-col flex-1'>
        <h3 className='font-bold text-lg'>{property}</h3>
        <p className='font-semibold'><span className='text-gray-400'>Price Per Night:</span> ${price_per_night}</p>
        <p className='text-gray-400 mt-2 mb-1'>{description}</p>
        <Link className='text-white bg-[#34977d] flex items-center justify-center w-[120px] font-semibold p-2 rounded-full' to='/'>Book Now</Link>
      </div>
    </div>
  )
}

export default FeaturedRoomCard
