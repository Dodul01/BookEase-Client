import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../../AppContext/AppContextProvider';
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';

const RoomDetails = () => {
  const { user } = useContext(AppContext);
  const [room, setRoom] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const [date, setDate] = useState(null);

  const minDate = () => {
    const today = new Date().toISOString().split('T')[0];
    return today;
  };

  const handleBooking = () => {
    if (date === null) {
      return toast.error('select a date to book room')
    }

    if (user) {
      const UpdateSeatsValue = Number(room.seats) - 1;
      const data = {
        date,
        room,
        userEmail: user?.email,
        roomId: room._id,
        newSeatsValue: UpdateSeatsValue
      }


      fetch('http://localhost:5000/bookingRoom', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
        .then((response) => {
          console.log(response);
          toast.success('room booked sucessfully');
        })
        .catch((error) => {
          console.log(error);
        })
    } else {
      navigate('/signUp')
    }
  }

  // const handleDate = (e) => {
  //   // const value = e.target.value.split('-');
  //   // const year = value[0]
  //   // const month = value[1]
  //   // const day = value[2]
  //   // const dateValue = { year, month, day }
  //   // setDate(dateValue);
  // }

  useEffect(() => {
    fetch(`http://localhost:5000/rooms/${id}`)
      .then(response => response.json())
      .then(data => setRoom(data))
  }, [])

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
            {/* <input onChange={handleDate} className='mb-2 border border-[#34977d] outline-[#34977d] rounded-lg p-2' type="date" /> */}
            {/* <input onChange={handleDate} className='mb-2 border border-[#34977d] outline-[#34977d] rounded-lg p-2' type="date" /> */}
            <input
              type="date"
              className='mb-2 border border-[#34977d] outline-[#34977d] rounded-lg p-2'
              value={date}
              min={minDate()}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <button onClick={handleBooking} className='text-white bg-[#34977d] flex items-center justify-center w-full font-semibold p-2 rounded-lg'>Book Now</button>
        </div>
        <div className='lg:w-1/4 p-1'>
          <h2 className='text-xl font-bold'>Room Details</h2>
          {room?.special_offers === '' ? '' :
            <h3 className='text-lg font-semibold'>Special Offer: {room?.special_offers}</h3>
          }
          <h3>Room Size: {room?.room_size}</h3>
          <p>Status: {room?.availability === true ? 'Available' : 'Not Available'}</p>
          <p>Seats Available: {room.seats}</p>
        </div>
      </div>
      <div className='my-4'>
        <h1>Review Section</h1>
        <div>
          {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
          {/* <DatePicker selected={date} onChange={(dateR) => setDate(dateR)}  /> */}
        </div>
        <div>
          <h3>Total Review : 0</h3>
        </div>
      </div>
    </div>
  )
}

export default RoomDetails
