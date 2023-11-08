import React from 'react'
import { Link } from 'react-router-dom'

const RoomCard = ({ room }) => {
  console.log(room);
  return (
    <Link to={`/rooms/${room._id}`} className='shadow-md rounded-lg cursor-pointer'>
      <img className='rounded-t-lg h-[250px] w-full object-cover bg-center' src={room.room_image} alt="room_image" />
      <div className='p-2'>
        <h3 className='font-semibold'>{room.name}</h3>
        <p className='text-gray-600 font-medium'>Price : ${room.price} P/N</p>
        <div className='flex gap-1'>
          <div className="rating rating-md">
            <input type="radio" name="rating-7" className={`mask mask-star-2 ${room?.room_rating >= 1 ? ' bg-orange-400' : 'bg-slate-300'}`} />
            <input type="radio" name="rating-7" className={`mask mask-star-2 ${room?.room_rating >= 2 ? ' bg-orange-400' : 'bg-slate-300'}`} />
            <input type="radio" name="rating-7" className={`mask mask-star-2 ${room?.room_rating >= 3 ? ' bg-orange-400' : 'bg-slate-300'}`} />
            <input type="radio" name="rating-7" className={`mask mask-star-2 ${room?.room_rating >= 4 ? ' bg-orange-400' : 'bg-slate-300'}`} />
            <input type="radio" name="rating-7" className={`mask mask-star-2 ${room?.room_rating >= 5 ? ' bg-orange-400' : 'bg-slate-300'}`} />
          </div>
          <p>( {room?.reviews.length} )</p>
        </div>
      </div>
    </Link>
  )
}

export default RoomCard
