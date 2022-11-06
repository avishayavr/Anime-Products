import React from 'react'
import { useNavigate } from "react-router-dom";
import {auth} from '../FirebaseSingup/firebaseConfig'
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { useState } from "react";
import LoginDemo from './templateDemo';


export default function LoginPage() {

    const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async (e) => {
    e.preventDefault()
    try {
     const user = await createUserWithEmailAndPassword(
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

  return (
    <div>
        <LoginDemo email={setLoginEmail} password={setLoginPassword} loginFun={login} btnText={'Sing Up'} linkDisplay={"none"}/>
    </div>
  )
}
