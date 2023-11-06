import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const RoomDetails = () => {
  const [room, setRoom] = useState({});
  const { id } = useParams();

  const handleDate = (e) =>{
    const value = e.target.value.split('-');
    const year = value[0]
    const month = value[1]
    const day = value[2]
    const date = {year, month, day}
    console.log(date);
  }

  useEffect(() => {
    fetch(`http://localhost:5000/rooms/${id}`)
      .then(response => response.json())
      .then(data => setRoom(data))
  }, [room])

  return (
    <div className='min-h-screen max-w-7xl mx-auto my-10'>
      <div className='flex lg:flex-row flex-col gap-3 p-1'>
        <div className='flex-1'>
          <img className='rounded-lg w-full' src={room?.room_image} alt="room_image" />
        </div>
        <div className='flex-1'>
          <div className='grid grid-cols-2 gap-3'>
            {room?.gallery_images?.map((image) => <img className='rounded-lg' src={image} alt="" />)}
          </div>
        </div>
      </div>
      <div className='flex lg:flex-row flex-col-reverse'>
        <div className='lg:w-3/4  p-1'>
          <h1 className='text-2xl font-semibold mb-1'>{room?.name}</h1>
          <h3 className='text-lg font-medium mb-3'>Per Nignt ${room?.price} USD</h3>
          <p className='text-base text-gray-600 mb-1'>{room?.description}</p>
          <div>
            <p className='font-medium mb-1'>Choose a date</p>
            <input onChange={handleDate} className='mb-2 border border-[#34977d] outline-[#34977d] rounded-lg p-2' type="date" />
          </div>
          <button className='text-white bg-[#34977d] flex items-center justify-center w-full font-semibold p-2 rounded-lg'>Book Now</button>
        </div>
        <div className='lg:w-1/4 p-1'>
          <h2 className='text-xl font-bold'>Room Details</h2>
          {room?.special_offers === '' ? '' :
            <h3 className='text-lg font-semibold'>Special Offer: {room?.special_offers}</h3>
          }
          <h3>Room Size: {room?.room_size}</h3>
          <p>Status: {room?.availability === true ? 'Available' : 'Not Available'}</p>
        </div>
      </div>
    </div>
  )
}

export default RoomDetails
