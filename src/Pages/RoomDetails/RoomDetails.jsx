import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../../AppContext/AppContextProvider';
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';
import moment from 'moment/moment';

const RoomDetails = () => {
  const { user } = useContext(AppContext);
  const [room, setRoom] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const [date, setDate] = useState(null);
  const [bookedRoom, setBookedRoom] = useState([]);
  const [isReviewed, setIsReviewed] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  console.log(moment().format('YYYY-MM-DD'));
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
          // console.log(response);
          toast.success('room booked sucessfully');
        })
        .catch((error) => {
          console.log(error);
        })
    } else {
      navigate('/signUp')
    }
  }
  console.log(room);
  const handlePostReview = (e) => {
    e.preventDefault();
    const review = e.target.review.value;
    const ratings = e.target.ratings.value;

    if (!user) {
      toast.error("You can't review the room without logging in.");
    } else if (bookedRoom.length === 0) {
      toast.error("You can't review the room without booking.");
    } else {
      const isRoomBooked = bookedRoom.some(singleRoom => singleRoom.name === room.name);


      if (isRoomBooked) {
        const userReview = {
          name: user?.displayName,
          user_image: user.photoURL,
          review: review,
          rating: ratings,
          date: moment().format('YYYY-MM-DD')
        }

        fetch(`http://localhost:5000/addReview/${room._id}`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(userReview)
        })
          .then((response) => {
            response.json();
          })
          .then((result) => setIsReviewed(result))

        toast.success("Review sucessfully added.");
        e.target.reset()
      } else {
        toast.error("You can only review a room you have booked.");
      }
    }
  }

  useEffect(() => {
    fetch(`http://localhost:5000/rooms/${id}`)
      .then(response => response.json())
      .then(data => setRoom(data))


    if (room?.seats == 0) {
      setIsButtonDisabled(true)
    }

    if (user) {
      fetch(`http://localhost:5000/bookingRoom?email=${user.email}`)
        .then(res => res.json())
        .then(result => {
          setBookedRoom(result)
        })
    }
  }, [isReviewed, bookedRoom])

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
          <h3 className='text-lg font-medium mb-1'>Per Nignt ${room?.price} USD</h3>

          <div className='flex gap-1 mb-3'>
            <div className="rating rating-md">
              <input type="radio" name="rating-7" className={`mask mask-star-2 ${room?.room_rating >= 1 ? ' bg-orange-400' : 'bg-slate-300'}`} />
              <input type="radio" name="rating-7" className={`mask mask-star-2 ${room?.room_rating >= 2 ? ' bg-orange-400' : 'bg-slate-300'}`} />
              <input type="radio" name="rating-7" className={`mask mask-star-2 ${room?.room_rating >= 3 ? ' bg-orange-400' : 'bg-slate-300'}`} />
              <input type="radio" name="rating-7" className={`mask mask-star-2 ${room?.room_rating >= 4 ? ' bg-orange-400' : 'bg-slate-300'}`} />
              <input type="radio" name="rating-7" className={`mask mask-star-2 ${room?.room_rating >= 5 ? ' bg-orange-400' : 'bg-slate-300'}`} />
            </div>
            <p>( {room?.room_rating} )</p>
          </div>

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
          <button onClick={handleBooking} className={`text-white bg-[#34977d] flex items-center justify-center w-full font-semibold p-2 rounded-lg ${isButtonDisabled && 'cursor-not-allowed bg-gray-400'}  `} disabled={isButtonDisabled}>Book Now</button>
        </div>
        <div className='lg:w-1/4 p-1'>
          <h2 className='text-xl font-bold'>Room Details</h2>
          {room?.special_offers === '' ? '' :
            <h3 className='text-lg font-semibold'>Special Offer: {room?.special_offers}</h3>
          }
          <h3>Room Size: {room?.room_size}</h3>
          <p>Status: {room?.availability === true ? 'Available' : 'Not Available'}</p>
          <p>Seats Available: {room?.seats}</p>
        </div>
      </div>
      <div className='my-4'>
        <h1 className='text-xl font-semibold'>Write a review For this room</h1>
        <div className='flex lg:flex-row flex-col gap-3 p-2'>
          <div className='flex-1'>
            <form onSubmit={handlePostReview} className='flex flex-col'>
              <div>
                <p className='text-lg font-semibold ml-1'>Rating</p>
                <select name='ratings' className='border border-[#34977d] w-[97%] rounded-lg p-2 m-1 outline-[#34977d]'>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
              </div>
              <p className='text-lg font-semibold ml-1'>Comment</p>
              <textarea className='border rounded-lg p-2 outline-[#34977d] border-[#34977d] w-[97%] m-1' name="review" cols="10" rows="5" placeholder="Write Your Review Here..."></textarea>
              <button className='text-white bg-[#34977d] flex items-center justify-center w-[120px] font-semibold p-2 rounded-full'>Post Review</button>
            </form>
          </div>

          <div className='flex-1'>
            <h3 className='text-xl font-semibold'>Total Review : {room?.reviews?.length}</h3>
            <div className='flex flex-col gap-2 mt-4'>
              {
                room?.reviews?.map((review, i) => {
                  return <div className='bg-base-100 p-2 rounded-lg border shadow'>
                    <div className='flex'>
                      <img className='h-[50px] w-[50px] rounded-full object-cover' src={review?.user_image} alt="" />
                      <div className='ml-4 w-full mb-5'>
                        <h1 className='font-semibold text-lg'>{review?.name}</h1>
                        <p>{review?.booking_info?.date}</p>
                        <div className='flex gap-2'>
                          <p>({room?.reviews[i].rating})</p>
                          <div className="rating rating-md">
                            <input type="radio" name="rating-7" className={`mask mask-star-2 ${room?.reviews[i]?.rating >= 1 ? ' bg-orange-400' : 'bg-slate-300'}`} />
                            <input type="radio" name="rating-7" className={`mask mask-star-2 ${room?.reviews[i]?.rating >= 2 ? ' bg-orange-400' : 'bg-slate-300'}`} />
                            <input type="radio" name="rating-7" className={`mask mask-star-2 ${room?.reviews[i]?.rating >= 3 ? ' bg-orange-400' : 'bg-slate-300'}`} />
                            <input type="radio" name="rating-7" className={`mask mask-star-2 ${room?.reviews[i]?.rating >= 4 ? ' bg-orange-400' : 'bg-slate-300'}`} />
                            <input type="radio" name="rating-7" className={`mask mask-star-2 ${room?.reviews[i]?.rating >= 5 ? ' bg-orange-400' : 'bg-slate-300'}`} />
                          </div>
                        </div>
                        <hr />
                      </div>
                    </div>
                    <p className='text-lg font-medium ml-16'>{review?.review}</p>
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
