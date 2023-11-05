import React from 'react'
import Nav from '../../Components/Nav/Nav'
import Banner from '../../Components/Banner/Banner'
import FeaturedRooms from '../../Components/FeaturedRooms/FeaturedRooms'
import SpecialOffers from '../../Components/SpecialOffers/SpecialOffers'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedRooms />
      <SpecialOffers />
      <NewsLetter />
    </div>
  )
}

export default Home
