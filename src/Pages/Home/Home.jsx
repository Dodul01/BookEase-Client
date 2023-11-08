import React from 'react'
import Nav from '../../Components/Nav/Nav'
import Banner from '../../Components/Banner/Banner'
import FeaturedRooms from '../../Components/FeaturedRooms/FeaturedRooms'
import SpecialOffers from '../../Components/SpecialOffers/SpecialOffers'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'


import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet-async'

AOS.init();


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>BookEase - Home</title>
      </Helmet>
      <Banner />
      <FeaturedRooms />
      <SpecialOffers />
      <NewsLetter />
    </div>
  )
}

export default Home
