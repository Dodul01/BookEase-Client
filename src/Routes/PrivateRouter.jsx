import React, { useContext } from 'react'
import { AppContext } from '../AppContext/AppContextProvider'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();

  if (isLoading) {
    return <div className='h-full w-[80vw] flex items-center justify-center'>
      <h1 className='text-2xl font-bold text-center mt-8'>Loading...</h1>
    </div>
  }else if (user) {
    return children
  } else {
    return <Navigate state={location.pathname} to='/signIn'></Navigate>
  }
  
  
}

export default PrivateRoute
