import React, { useContext } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from '../../AppContext/AppContextProvider'
import toast from 'react-hot-toast'

const Signin = () => {
  const { signInUser, signInUsingGoogle } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const Form = e.target;
    const email = Form.email.value;
    const password = Form.password.value;
    const user = { email, password };
    console.log(user);

    signInUser(email, password)
      .then((userCredential) => {
        toast.success('sign in sucessfully');
        if (userCredential.user) {
          navigate(location?.state ? location?.state : '/')
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    Form.reset()
  }

  const handleGoogleSignUp = () => {
    signInUsingGoogle()
      .then((userCredential) => {
        if (userCredential.user) {
          navigate('/')
          toast.success('Sign In Sucessfully')
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div className='mt-6'>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:block hidden lg:text-left">
            <h1 className="text-5xl font-bold">BookEase</h1>
            <p className="py-6 max-w-xl">Welcome back! Log in to access your account and manage your bookings effortlessly. Enjoy a seamless experience as you revisit your favorite destinations and explore new adventures. Sign in to your account to make changes, view your past stays, and make new reservations with ease.</p>
          </div>

          <div className="card flex-shrink-0 lg:w-full lg:max-w-sm w-[80vw] shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body pt-1 pb-2 mb-0">
              <h1 className='text-2xl font-bold text-center my-2'>Sign In</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#34977d] text-white hover:bg-[#34977d]">Sign Up</button>
              </div>
            </form>
            <p className='px-8 font-medium mt-2'>Don't Have An Account? <Link className='underline text-[#34977d]' to='/signUp'>SignUp</Link></p>
            <div className='px-8 py-4'>
              <hr />
              <p className='font-semibold text-center'>Continue With</p>
              <button onClick={handleGoogleSignUp} className=' flex items-center justify-center font-semibold border rounded-lg w-full p-2 mt-2 hover:bg-slate-200'><FcGoogle className='text-xl mr-0' />oogle</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
