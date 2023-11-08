import React from 'react'
import Nav from '../../Components/Nav/Nav'
import Banner from '../../Components/Banner/Banner'
import FeaturedRooms from '../../Components/FeaturedRooms/FeaturedRooms'
import SpecialOffers from '../../Components/SpecialOffers/SpecialOffers'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'


import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const Home = () => {
  return (
    <div>
      <Banner />
      <div >
        <FeaturedRooms />
      </div>
      <div>

        <SpecialOffers />
      </div>
      <div>

        <NewsLetter />
      </div>
    </div>
  )
}

export default Home
