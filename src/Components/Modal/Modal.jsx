import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Modal = ({ isOpen, onClose, booking }) => {
  const [date, setDate] = useState(null);

  if (!isOpen) return null;


  const minDate = () => {
    const today = new Date().toISOString().split('T')[0];
    return today;
  };

  const handleUpdate = () => {
    if (date == null) {
      toast.error('select a date')
    }

    fetch(`https://assignment-11-server-lac-xi.vercel.app/updateBooking/${booking._id}`,{
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({date: date})
    })
    .then((res)=> res.json())
    .then(data => {
      if(data.modifiedCount){
        toast.success('data updated sucessfully.')
      }
    })
  }


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white w-3/4 rounded-lg p-8">
        <h2 className="text-2xl mb-4 text-center">Update Booking</h2>
        <img className='h-[200px] w-full object-cover' src={booking?.room_image} alt="" />
        <p className='text-xl font-bold'>{booking?.name}</p>
        <p className='text-lg font-semibold'>Size: {booking?.room_size}</p>
        <input
          type="date"
          className='mb-2 border border-[#34977d] outline-[#34977d] rounded-lg p-2 mx-auto w-full'
          value={date}
          min={minDate()}
          onChange={(e) => setDate(e.target.value)}
        />
        <p className='text-lg font-semibold'>Offer: {booking?.special_offers}</p>
        <p className='text-lg font-semibold'>Price: {booking.price}</p>

        <button className="bg-[#34977d] text-white font-bold py-2 px-4 rounded-lg w-full"
          onClick={() => {
            onClose()
            handleUpdate()
          }}
        >
          update Booking
        </button>
      </div>
    </div>
  );
};

export default Modal;