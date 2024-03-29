import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";
// import { MdOutlineLightMode } from "react-icons/md";
import { useSelector } from "react-redux";
import DisplayMode from "./DisplayMode";

export default function Navbar({ openCart, logOut, user, changeBgFun }) {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart.value);

  return (
    <div className="bg-black flex justify-between items-center">
      {/* left side of the navbar */}
      <div className="flex items-center text-[#fff]">
        <Link to="/">
          <h1 className="p-3 font-bold text-4xl hover:text-[#fff]">AA.</h1>
        </Link>
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
     <div className="flex items-center">
     {/* <div>
        <MdOutlineLightMode className="text-4xl text-[#fff]" onClick={()=> changeBgFun()}/>
      </div> */}
      <DisplayMode/>
     <div
        onClick={openCart}
        className={
          user?
           "text-[#fff] relative flex justify-center p-3 hover:cursor-pointer"
            : "hidden"
        }
      >
        <BsFillBagFill className="text-4xl" />
        <span className="absolute top-6  text-[#2d2d2d]">{cart?.length}</span>
      </div>
     </div>
    </div>
  );
}
