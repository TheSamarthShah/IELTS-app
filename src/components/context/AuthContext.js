import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../../firebase';

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [mounted, setMounted] = useState(true);
    const [currentUser,setCurrentUser] = useState()
    const [loading,setLoading] = useState(true)
    
    function signup(email, password){
        auth.createUserWithEmailAndPassword(email,password)
    }
    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password)
    }
    function logout(){
        auth.signOut()
    }

    useEffect(()=>{
        let isMounted = true;
        const unsubscribe = auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    },[])
   
    const value = { 
        currentUser,
        login,
        logout,
        signup
    }

  return (
  <AuthContext.Provider value={value}>
      {!loading && children}
  </AuthContext.Provider>
  )
}
