import React from 'react'
import { useNavigate } from "react-router-dom";
import {auth} from '../FirebaseSingup/firebaseConfig'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { useState, useEffect } from "react";
import LoginDemo from './templateDemo';
import { useAuthState } from 'react-firebase-hooks/auth'


export default function Login() {

  const navigate = useNavigate();

  const [user] = useAuthState(auth);

  // states for email and password inputs
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

// login function 
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


  // login with google fun
  const singInWithGoogle = () =>{
    const provider = new GoogleAuthProvider
    signInWithPopup(auth, provider)
    console.log(provider);
  }

  // use effect to authorization
  useEffect(()=>{
    if(user) navigate('/products')
  },[user])


  return (
    <div>
        <LoginDemo email={setLoginEmail} password={setLoginPassword} loginFun={login} singInWithGoogle={singInWithGoogle} btnText={'Sing In'}/>
    </div>
  )
}
