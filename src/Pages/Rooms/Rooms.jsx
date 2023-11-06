import React, { useEffect, useState } from 'react'
import RoomCard from '../../Components/RoomCard/RoomCard';

const Rooms = () => {
  const [roomsData, setRoomsData] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [selectedValue, setSelectedValue] = useState();

  const handleFilter = (e) => {
    setSelectedValue(e.target.value)

    if (e.target.value === 'highToLow') {
      const highToLowSort = roomsData.sort((a, b) => {
        return b.price - a.price;
      })

      setRooms(highToLowSort)
    } else if (e.target.value === 'lowToHigh') {
      const lowToHightSort = roomsData.sort((a, b) => {
        return a.price - b.price;
      })

      setRooms(lowToHightSort)
    } else if(e.target.value === 'none') {
      setRooms(roomsData);
    }
  }

  useEffect(() => {
    fetch('http://localhost:5000/rooms')
      .then(response => response.json())
      .then(data => {
        setRooms(data);
        const checkAvailable = data.filter((room) => room.seats > 0);

        setRoomsData(checkAvailable);
      });
  }, [])

  return (
    <div className='my-10 min-h-screen max-w-7xl mx-auto p-2'>
      <h2 className='text-2xl font-semibold my-2'>Available Rooms</h2>
      <div className='border-b-2 py-3 flex items-center'>
        <h3 className='font-bold mr-3'>Filter by Price</h3>
        <select value={selectedValue} onChange={handleFilter} className='border-2 p-1 rounded-lg outline-[#34977d]'>
          <option value="none">Filter Price</option>
          <option value="highToLow">High to low</option>
          <option value="lowToHigh">Low to hight</option>
        </select>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-3'>
        {rooms.map((room) => {
          return room.seats >= 1 && <RoomCard key={room._id} room={room} />
        })}
      </div>
    </div>
  )
}

export default Rooms
