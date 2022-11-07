import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { Link, Navigate, useNavigate} from "react-router-dom";
import {UserAuth} from '../../context/AuthContext';
import { useEffect } from "react";



export default function LoginDemo({email, password, loginFun, btnText, linkDisplay}) {
  const {googleSingIn, user} = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSingIn = async (e) =>{
    e.preventDefault()
    try {
      await googleSingIn();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
  if(user !=null){
    navigate('/products')
  }
  },[user])

  return (
    <div className="relative w-full h-screen bg-[#eee] ">
      {/* form */}
      <div className="flex justify-center items-center h-full">
        <form className="max-w-[400px] w-full mx-auto sm:h-auto h-fit bg-white p-8">
          <h2 className="text-4x font-bold text-center py-4">AA.</h2>
          <div className="flex flex-col mb-4">
            <label>Username</label>
            <input
              onChange={(e) => email(e.target.value)}
              className="border relative bg-gray-100 p-2"
              type="text"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label>Password</label>
            <input
              onChange={(e) => password(e.target.value)}
              className="border relative bg-gray-100 p-2"
              type="password"
            />
          </div>
          <button
            onClick={(e)=> loginFun(e)}
            className="w-full py-3 bg-[#2d2d2d] hover:bg-[#aaa] relative text-[#fff]"
          >
           {btnText}
          </button>
          <Link to="/singupPage" style={{display: `${linkDisplay}`}}>
          <p className='text-center mt-8' >Not a member? Sing up now</p>
            </Link>
          <div className="flex justify-between mt-5">
            <p className="border shadow-lg hover:shadow-xl px-14 py-3 relative flex items-center">
              <AiFillFacebook className="text-xl" />
            </p>
            <p className="border shadow-lg hover:shadow-xl px-14 py-3 relative flex items-center">
              <FcGoogle onClick={handleGoogleSingIn}/>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
