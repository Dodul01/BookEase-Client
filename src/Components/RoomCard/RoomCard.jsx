import React from 'react'
import { Link } from 'react-router-dom'

const RoomCard = ({ room }) => {
  
  return (
    <Link to={`/rooms/${room._id}`} className='shadow-md rounded-lg cursor-pointer'>
      <img className='rounded-t-lg h-[250px] w-full bg-cover bg-center' src={room.room_image} alt="room_image" />
      <div className='p-2'>
        <h3 className='font-semibold'>{room.name}</h3>
        <p className='text-gray-600 font-medium'>Price : ${room.price} P/N</p>
      </div>
    </Link>
  )
}

export default RoomCard
