import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const auth = getAuth(app);
  const [isLoading, setIsLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider()
  const signUpUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signOutUser = () => {
    setIsLoading(true)
    return signOut(auth)
  }

  const signInUser = ( email, password)=>{
    setIsLoading(true);
    return signInWithEmailAndPassword( auth, email, password);
  }

  const signInUsingGoogle = () =>{
    return signInWithPopup(auth, googleProvider)
  }


  const appInfo = {
    signUpUser,
    user,
    signOutUser,
    signInUser,
    isLoading,
    signInUsingGoogle
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
    return () => {
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
