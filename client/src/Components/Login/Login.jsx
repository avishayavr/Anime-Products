import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../FirebaseSingup/firebaseConfig";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState, useEffect } from "react";
import LoginDemo from "./templateDemo";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Login() {
  const navigate = useNavigate();

  const [user] = useAuthState(auth);

  // states for email and password inputs
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // login function
  const login = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      navigate("/products");
    } catch (error) {
      console.log({ msg: error });
    }
  };

  // login as a guest
const loginAsGuest = async()=>{
  // setLoginEmail("guest99@gmail.com");
  // setLoginPassword("guest99");
  try {
    const user = await signInWithEmailAndPassword(
      auth,
      "guest99@gmail.com",
      "guest99"
    );
    navigate("/products");
  } catch (error) {
    console.log({ msg: error });
  }}

  // login with google fun
  const singInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  // use effect to authorization
  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  return (
    <div>
      <LoginDemo
        email={setLoginEmail}
        password={setLoginPassword}
        loginFun={login}
        singInWithGoogle={singInWithGoogle}
        loginAsGuest={loginAsGuest}
        btnText={"Sing In"}
      />
    </div>
  );
}
