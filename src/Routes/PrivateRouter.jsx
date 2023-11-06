import React, { useContext } from 'react'
import { AppContext } from '../AppContext/AppContextProvider'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const { user, isLoading } = useContext(AppContext);
  const location = useLocation();

  if(isLoading){
    return <h1 className='text-2xl font-bold text-center'>Loading...</h1>
  }else if(user){
    return children
  }else{
    return <Navigate state={location.pathname} to='/signIn'></Navigate>
  }
}

export default PrivateRoute
   