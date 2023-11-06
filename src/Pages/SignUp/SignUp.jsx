import { useContext } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { AppContext } from '../../AppContext/AppContextProvider'
import { getAuth, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config'
const SignUp = () => {
  const {signUpUser} = useContext(AppContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const Form = e.target;
    const name = Form.name.value;
    const email = Form.email.value;
    const imageUrl = Form.imageURL.value;
    const password = Form.password.value;
    const user = {name, email, imageUrl, password}
    
    const auth = getAuth(app);

    signUpUser(email, password)
      .then((userCredential)=>{
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: imageUrl
        })
        console.log(userCredential.user);
      })
      .catch((error)=>{
        console.log(error);
      })
    Form.reset();
  }

  return (
    <div className='my-10'>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:block hidden lg:text-left">
            <h1 className="text-5xl font-bold">BookEase</h1>
            <p className="py-6 max-w-xl">Join us now for exclusive member benefits, personalized recommendations, and easy booking solutions. Your gateway to unforgettable travel experiences starts here. Sign up in seconds and unlock a world of exciting possibilities. Begin your journey with us today!</p>
          </div>

          <div className="card flex-shrink-0 lg:w-full lg:max-w-md w-[80vw] shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body pt-1 pb-2 mb-0">
              <h1 className='text-2xl font-bold text-center my-2 mb-1'>Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">User Name</span>
                </label>
                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Image Url</span>
                </label>
                <input type="text" name='imageURL' placeholder="Image Url" className="input input-bordered" required />
              </div>
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
              <div className="form-control mt-2">
                <button className="btn bg-[#34977d] text-white hover:bg-[#34977d]">Sign Up</button>
              </div>
            </form>
            <p className='px-8 font-medium mt-2'>Already Have An Account? <Link className='underline text-[#34977d]' to='/signIn'>SignIn</Link></p>
            <div className='px-8 py-4'>
              <hr />
              <p className='font-semibold text-center'>Continue With</p>
              <button className=' flex items-center justify-center font-semibold border rounded-lg w-full p-2 mt-2 hover:bg-slate-200'><FcGoogle className='text-xl mr-0' />oogle</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
