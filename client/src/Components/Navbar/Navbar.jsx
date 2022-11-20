import React from "react";
import {useNavigate } from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";


export default function Navbar({openCart, logOut, user}) {

  const navigate = useNavigate();

  const [cart, setCart] = useState([])

  useEffect(()=>{
    let storage = []
    Object.keys(sessionStorage).forEach(key=>{
      storage.push(JSON.parse(sessionStorage.getItem(key)))
    })
    setCart(storage)
    // console.log(cart);
  },[])

  return (
    <div className="bg-[#2d2d2d] flex justify-between items-center">
      {/* left side of the navbar */}
      <div className="flex items-center text-[#fff]">
        <h1 className="p-3 font-bold text-4xl">AA.</h1>
        {/* div for links and log out */}
        <div className="flex p-3">
          <button
            className="p-3"
            onClick={() => {
              user ? navigate("/products") : prompt("Login to continue");
            }}
          >
            Products
          </button>
          <button
            className="p-3"
            onClick={() => {
              user ? logOut() : navigate("/login");
            }}
          >
            {user ? "Logout" : "Login"}
          </button>
        </div>
      </div>

      {/* right side of the navbar */}
      <div
        onClick={openCart}
        className="text-[#fff] relative flex justify-center p-3 hover:cursor-pointer">
        <BsFillBagFill className="text-3xl"/>
        <span className="absolute top-4  text-[#2d2d2d]">{ cart.length }</span>
      </div>
      {/* <Cart open={open} setOpen={setOpen} /> */}
    </div>
  );
}
