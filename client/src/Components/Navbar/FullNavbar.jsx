import React, { useState, useEffect } from "react";
import Cart from "../CartAndCheckout/Cart";
import Navbar from "./Navbar";
import {auth} from "../FirebaseSingup/firebaseConfig"
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";


export default function FullNavbar() {
// current user
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  // function to change the open state
  const openCartFun = () => {
    setOpen(true);
  };

  // function to logout
  const logOutFun = () => {
    // console.log(auth);
    signOut(auth);
    navigate("/");
  };

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div>
      <Navbar openCart={openCartFun} logOut={logOutFun} user={user}/>
      <Cart open={open} setOpen={setOpen} />
    </div>
  );
}
