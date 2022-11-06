import React from 'react'
import { useNavigate } from "react-router-dom";
import {auth} from '../FirebaseSingup/firebaseConfig'
import { signInWithEmailAndPassword} from 'firebase/auth'
import {GoogleAuthProvider, signInWithPopup, onAuthStateChanged} from 'firebase/auth'
import { useState } from "react";
import LoginDemo from './templateDemo';
import { useEffect } from 'react';


export default function LoginPage() {

    const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({})

  const login = async (e) => {
    e.preventDefault()
    try {
     const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      navigate("/products");
      console.log(user);
    } catch (error) {
      console.log({ msg: error });
    }
  };


  // login with google
const loginWithGoogle = () =>{
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
}

// handle login with google 
const handleGoogleLogin = async (e) =>{
  e.preventDefault()
  try {
    await loginWithGoogle();
  } catch (error) {
    console.log(error);
  }
}

useEffect(() =>{
  const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
    setUser(currentUser)
    console.log('User', currentUser);
  });

  // if(user != null) navigate('/products')

  return () =>{
    unsubscribe();
  }

}, [])

useEffect(()=>{
  if(user != null){
    navigate('/products');
  }
}, [user])


  return (
    <div>
        <LoginDemo email={setLoginEmail} password={setLoginPassword} loginFun={login} loginWithGoogleFun={handleGoogleLogin} btnText={'Sing In'}/>
    </div>
  )
}
