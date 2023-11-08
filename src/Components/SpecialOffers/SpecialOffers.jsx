import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';



const SpecialOffers = () => {
  const [specialOffers, setSpecialOffers] = useState([]);


  useEffect(() => {
    fetch('https://assignment-11-server-lac-xi.vercel.app/specialOffers')
      .then(response => response.json())
      .then(result => setSpecialOffers(result));
  }, [])



  return (
    <div data-aos="fade-up" className='max-w-7xl mx-auto my-5 p-2'>
      <h1 className='text-2xl font-bold mb-2'>Special Offers For You</h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {specialOffers.map((specialOffer) => {
          return <SwiperSlide key={specialOffer._id}>
            <div className='relative'>
              <img className='w-full h-[50vh] object-cover rounded-lg' src={specialOffer.room_image} alt="special offer image" />
              <div className='absolute top-0 left-0 w-full h-full opacity-70 rounded-lg bg-black'>Hello</div>
              <div className='absolute top-0 left-0 w-full h-full text-white p-4'>
                <div className='flex items-center justify-center h-full'>
                  <div>
                    <h1 className='text-4xl font-bold text-center my-3'>{specialOffer.room_name}</h1>
                    <p className='text-xl font-semibold text-center'>{specialOffer.description}</p>
                    <div className='flex items-center justify-center flex-wrap gap-4 mb-3'>
                      <p>{specialOffer.special_offer}</p>
                      <p className='line-through'>Regular Price ${specialOffer.original_price} per night</p>
                      <p>Discount Price ${specialOffer.discount_price} per night</p>
                    </div>
                    <Link className='text-white bg-[#34977d] flex items-center justify-center mx-auto w-[160px] font-semibold p-2 rounded-full' to='/'>Get Offer Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        })}
      </Swiper>
    </div>
  )
}

export default SpecialOffers
