import { Link } from "react-router-dom"

const Banner = () => {
  return (
    <div className="relative h-[80vh] w-full ">
      <div className="relative bg-fixed bg-no-repeat bg-[url('https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[80vh] w- object-cover bg-center"></div>
      <div className="absolute top-0 left-0  h-full w-full bg-black opacity-50"></div>
      <div className="absolute top-5 left-0 w-full h-full">
        <div className="text-white max-w-7xl mx-auto h-full flex items-center justify-center flex-col">
          <h1 className="text-5xl font-bold text-center">Your Seamless Gateway to <br />Stress Free Hotel Reservations</h1>
          <p className="max-w-3xl p-2 text-center">Welcome to BookEase, your ultimate online destination for hassle-free hotel reservations. With our user-friendly platform, finding and booking the perfect accommodation is just a few clicks away</p>
          <Link className='text-white bg-[#34977d] flex items-center justify-center w-[120px] font-semibold p-2 rounded-full' to='/signUp'>Join Now</Link>
        </div>
      </div>
    </div>
  )
}

export default Banner
