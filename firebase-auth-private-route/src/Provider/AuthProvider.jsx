import React, { createContext, useEffect, useState } from "react";
// import { } from "firebase/auth";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../FireBase/FireBase.init";

//create new context name AuthContext:
export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logOut=()=>{
    return signOut(auth)
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user", currentUser);
      setUser(currentUser)
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // onAuthStateChanged(auth, (currentlyUser) => {
  //   if (currentlyUser) {
  //     setUser(currentlyUser)
  //     console.log(currentlyUser)
  //   } else {
  //     setUser(null)
  //   }
  // });
  const authInfo = {
    name: "nova",
    createUser,
    loginUser,
    user,
    logOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
