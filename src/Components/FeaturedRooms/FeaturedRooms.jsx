import { useState } from "react"
import { useEffect } from "react"
import FeaturedRoomCard from "../FeaturedRoomCard/FeaturedRoomCard";

const FeaturedRooms = () => {
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const rooms = featuredRooms?.slice(0, 6);

  useEffect(() => {
    fetch('http://localhost:5000/rooms')
      .then(response => response.json())
      .then(data => setFeaturedRooms(data))
  },[])

  return (
    <div className='max-w-7xl mx-auto my-5'>
      <h1 className='text-2xl font-bold mb-2'>Take a dip at these featured rooms</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5 p-2">
        {rooms?.map((featuredRoom) => {
          return <FeaturedRoomCard key={featuredRoom._id} featuredRoom={featuredRoom}/>
        })}
      </div>
    </div>
  )
}

export default FeaturedRooms
