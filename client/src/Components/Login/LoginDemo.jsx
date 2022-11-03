import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseSingup/firebaseConfig";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginDemo() {
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {
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

  return (
    <div className="relative w-full h-screen bg-[#eee] ">
      {/* <img className="absolute w-full h-full object-cover mix-blend-overlay"
src="https://i.pinimg.com/564x/90/ef/15/90ef15a6dcb970fc6f58d6ef0cdbcaf2.jpg"
/> */}

      {/* form */}
      <div className="flex justify-center items-center h-full">
        <form className="max-w-[400px] w-full mx-auto sm:h-auto h-fit bg-white p-8">
          <h2 className="text-4x font-bold text-center py-4">Brand.</h2>
          <div className="flex flex-col mb-4">
            <label>Username</label>
            <input
              onChange={(e) => setLoginEmail(e.target.value)}
              className="border relative bg-gray-100 p-2"
              type="text"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label>Password</label>
            <input
              onChange={(e) => setLoginPassword(e.target.value)}
              className="border relative bg-gray-100 p-2"
              type="password"
            />
          </div>
          <button
            onClick={login}
            className="w-full py-3 bg-[#2d2d2d] hover:bg-[#aaa] relative text-[#fff]"
          >
            Sing In
          </button>
          <p className="text-center mt-8">Not a member? Sing up now</p>
          <div className="flex justify-between mt-5">
            <p className="border shadow-lg hover:shadow-xl px-14 py-3 relative flex items-center">
              <AiFillFacebook className="text-xl" />
            </p>
            <p className="border shadow-lg hover:shadow-xl px-14 py-3 relative flex items-center">
              <FcGoogle />
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
