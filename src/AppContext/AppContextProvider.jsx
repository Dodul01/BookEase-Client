import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const auth = getAuth(app);
  const [isLoading, setIsLoading] = useState(true);

  const signUpUser = (email, password) => {
    isLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const appInfo = {
    signUpUser
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
       if (user) {
        setIsLoading(false);
        setUser(user)
        console.log(user);
      } else {
        setIsLoading(false)
        console.log('user not found');
      }
    })
    return ()=>{
      unsubscribe();
    }
  }, [])

  return (
    <AppContext.Provider value={appInfo}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
