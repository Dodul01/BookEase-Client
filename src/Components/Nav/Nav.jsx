import React, { useContext, useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsFillMenuButtonWideFill } from 'react-icons/bs'
import { AppContext } from '../../AppContext/AppContextProvider';
import toast from 'react-hot-toast';


const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user , signOutUser, setUser} = useContext(AppContext);

  const links = <>
    <NavLink className='mx-2 font-medium' to='/'>Home</NavLink>
    <NavLink className='mx-2 font-medium' to='/rooms'>Rooms</NavLink>
    <NavLink className='mx-2 font-medium' to='/myBookings'>My Booking</NavLink>
    <NavLink className='mx-2 font-medium' to='/career'>Career Oppertunites</NavLink>
    <NavLink className='mx-2 font-medium' to='/about'>About Us</NavLink>
  </>


  const handleSignOut = () =>{
    signOutUser()
      .then(()=>{
        toast.success('Sign out sucessfully');
        setUser(null)
      })
      .catch((error)=>{
        console.log(error);
      })
  }

  useEffect(()=>{},[user])

  return (
    <div className=' bg-[#ffffff] z-40 py-4 px-2'>

      <nav className='fixed left-0 top-0 z-40 bg-white w-full'>
        <div className='flex item-center justify-between max-w-7xl mx-auto p-2'>
          <div className='flex  items-center'>
            <h2 className='font-mono text-3xl text-[#34977d] font-bold'>BookEase</h2>
            {/* Profile info */}
            {user ?
              <Link to='/' className='md:flex hidden items-center justify-center gap-3 h-[45px] cursor-pointer ml-5 border p-2 rounded-full'>
                <img className='h-[30px] w-[30px] rounded-full object-cover' src={`${user?.photoURL}`} alt="" />
                <div className='flex flex-col'>
                  <strong>{user?.displayName}</strong>
                  <p>{user?.email}</p>
                </div>
              </Link>

              : ''}

          </div>
          <div className='md:flex md:items-center hidden'>
            {links}
          </div>
          <div className='md:flex items-center justify-center hidden'>
            {user ?
              <button onClick={handleSignOut} className='text-white bg-[#34977d] flex items-center justify-center h-10 w-[120px] font-semibold p-2 rounded-full'>Sign Out</button> :
              <Link className='text-white bg-[#34977d] flex items-center justify-center w-[120px] font-semibold p-2 rounded-full' to='/signUp'>Sign Up</Link>
            }
          </div>
          {/* Mobile Menu */}
          <div onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden flex'>
            <BsFillMenuButtonWideFill className='text-2xl cursor-pointer' />
          </div>

          <div className={`md:hidden flex flex-col absolute top-12 ${isMenuOpen ? 'left-0' : 'left-[-100%]'} bg-white pb-5 transition-all w-[100%] p-2`}>
            <Link to='/' className='flex lg:hidden items-center justify-center gap-3 cursor-pointer ml-2 border p-2 rounded-full mb-5 max-w-[150px]'>
              <img className='h-[30px] rounded-full' src={user?.photoURL} alt="" />
              <strong>{user?.displayName}</strong>
            </Link>
            {links}
            <button onClick={handleSignOut} className='text-white bg-[#34977d] flex items-center justify-center h-10 w-[120px] font-semibold p-2 rounded-full'>Sign Out</button> :
          </div>
        </div>

      </nav>
    </div>
  )
}

export default Nav
