import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";



const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({})

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [])


    return <AuthContext.Provider value={{ signUp, user, logIn, logOut }}  > {children} </AuthContext.Provider>;
}

export function UserAuth() {
    return useContext(AuthContext);
}   