import { useState, useContext, createContext, useEffect } from "react"
import { GoogleAuthProvider, signInWithRedirect, signOut, onAuthStateChanged, signInWithPopup } from 'firebase/auth'

import { auth } from "../api/firebase.config";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});

    // Funcion para loguearse
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

    // Funcion para logout
    const logOut = () => {
        signOut(auth);
    } 

    // Si cerramos sesion y volver a loguearnos
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser)=> {
        setUser(currentUser)
      })
      return () => {
        unSubscribe()
      }
    }, [])

    return (
        <AuthContext.Provider value={{googleSignIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    )
    

}

export const userAuth = () => {
    return useContext(AuthContext)
}