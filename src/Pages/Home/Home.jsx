import React from 'react'
import Nav from '../../Components/Nav/Nav'
import Banner from '../../Components/Banner/Banner'
import FeaturedRooms from '../../Components/FeaturedRooms/FeaturedRooms'
import SpecialOffers from '../../Components/SpecialOffers/SpecialOffers'

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedRooms />
      <SpecialOffers />
    </div>
  )
}

export default Home
