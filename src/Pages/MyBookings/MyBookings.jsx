import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../AppContext/AppContextProvider'
import moment from 'moment/moment';
import Swal from 'sweetalert2';
import Modal from '../../Components/Modal/Modal';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user, isLoading } = useContext(AppContext);
  const today = moment().format('YYYY-MM-DD');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleBooking, setSingleBooking] = useState(null);

  if (user === null) {
    return navigate('/signIn')
  }

  const handleCancelBooking = (id, bookingDate) => {
    if (today === bookingDate) {
      return toast.error('you can not cancel the booking')
    } else if (bookingDate.split('-')[2] - (moment().format('DD') - 1) === 2) {
      return toast.error('can not cancel 24 hour before')
    }

    Swal.fire({
      title: "Are you sure you want to cancel booking?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#34977d",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookingRoom/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              const remainingBooking = bookings.filter((booking) => booking._id !== id);
              setBookings(remainingBooking);
            }
          })

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });

  }

  const handleUpdateBooking = (id, booking) => {
    setIsModalOpen(true);
    setSingleBooking(booking);
  }

  useEffect(() => {
    fetch(`http://localhost:5000/bookingRoom?email=${user.email}`)
      .then((response) => response.json())
      .then(data => setBookings(data))
  }, [user,  bookings])

  return (
    <div className='mt-6 min-h-screen p-2'>
      <Helmet>
        <title>BookEase - My Booking</title>
      </Helmet>
      <h1 className='text-2xl font-semibold mb-3'>Booking</h1>
      <h1>{isLoading && 'Loading....'}</h1>
      {bookings.length === 0 && <h1 className='text-xl font-semibold text-center mt-4'>You do not booked any room</h1>}
      <div className='grid lg:grid-cols-2 gap-1 grid-cols-1'>
        {bookings?.map((booking) => {
          return <div key={booking._id} className='flex flex-wrap border p-2 rounded-lg'>
            <div>
              <img className='h-[230px]' src={booking?.room_image} alt="" />
            </div>
            <div className='flex-1 ml-4'>
              <p className='text-xl font-bold'>{booking?.name}</p>
              <p className='text-lg font-semibold'>Size: {booking?.room_size}</p>
              <p className='text-lg font-semibold'>Your Booking Date :{booking?.bookingDate}</p>
              <p className='text-lg font-semibold'>{booking?.special_offers}</p>
              <p className='text-lg font-semibold'>Price: {booking.price}</p>
              <button onClick={() => handleUpdateBooking(booking._id, booking)} className='text-white bg-[#34977d] flex items-center justify-center w-full font-semibold p-2 mt-2 rounded-lg'>Update Booking</button>
              <button onClick={() => handleCancelBooking(booking._id, booking.bookingDate, booking.name, booking)} className='text-white bg-[#34977d] flex items-center justify-center w-full font-semibold p-2 mt-2 rounded-lg'>Cancel Booking</button>
            </div>
          </div>
        })}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} booking={singleBooking} />
    </div>
  )
}

export default MyBookings
