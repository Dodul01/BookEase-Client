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
  const [bookedRoom, setBookedRoom] = useState([]);
  const [message, setMessage] = useState(false);

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

  const handlePostReview = (e) => {
    e.preventDefault();
    const review = e.target.review.value;

    fetch(`http://localhost:5000/bookingRoom?email=${user.email}`)
      .then(res => res.json())
      .then(result => {
        setBookedRoom(result)
      })


    if (!user) {
      toast.error("You can't review the room without logging in.");
    } else if (bookedRoom.length === 0) {
      toast.error("You can't review the room without booking.");
    } else {
      const isRoomBooked = bookedRoom.some(singleRoom => singleRoom.name === room.name);


      if (isRoomBooked) {
        toast.success("You can review the room.");

        
        console.log(review);
      } else {
        toast.error("You can only review a room you have booked.");
      }
    }
  }

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
        <h1 className='text-xl font-semibold'>Write a review For this room</h1>
        <div className='flex lg:flex-row flex-col gap-3 p-2'>
          <div className='flex-1'>
            <form onSubmit={handlePostReview} className='flex flex-col'>
              <textarea className='border rounded-lg p-2 outline-[#34977d] border-[#34977d] w-[97%] m-1' name="review" cols="10" rows="5" placeholder="Write Your Review Here..."></textarea>
              <button className='text-white bg-[#34977d] flex items-center justify-center w-[120px] font-semibold p-2 rounded-full'>Post Review</button>
            </form>
          </div>

          <div className='flex-1'>
            <h3 className='text-xl font-semibold'>Total Review : {room?.reviews?.length}</h3>
            <div className='flex flex-col gap-2 mt-4'>
              {
                room?.reviews?.map((review) => {
                  return <div className='bg-base-100 p-2 rounded-lg border shadow'>
                    <div className='flex'>
                      <img className='h-[50px] w-[50px] rounded-lg' src={review?.user_image} alt="" />
                      <div className='ml-4 w-full mb-5'>
                        <h1>{review?.name}</h1>
                        <p>{review?.booking_info?.date}</p>
                        <hr />
                      </div>
                    </div>
                    <p className='text-lg font-semibold'>{review?.review}</p>
                  </div>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomDetails
