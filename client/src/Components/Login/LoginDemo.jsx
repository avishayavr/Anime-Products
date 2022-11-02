import React from "react";
import {FcGoogle} from "react-icons/fc"
import {AiFillFacebook} from "react-icons/ai"
export default function LoginDemo() {
  return (
  <div className="relative w-full h-screen bg-zinc-900/90">
<img className="absolute w-full h-full object-cover mix-blend-overlay"
src="https://i.pinimg.com/564x/90/ef/15/90ef15a6dcb970fc6f58d6ef0cdbcaf2.jpg"
/>

{/* form */} 
<div className="flex justify-center items-center h-full">
  <form className="max-w-[400px]">
    <h2 className="text-4x font-bold text-center py-4">Brand.</h2>
    <div className="flex justify-between">
      <p><AiFillFacebook/> Facebook</p>
      <p><FcGoogle/>. Google</p>
    </div>
    <div>
      <label>Username</label>
      <input type="text" />
    </div>
    <div>
      <label>Password</label>
      <input type="password" />
    </div>
    <button>Sing In</button>
    <p>Not a member? Sing up now</p>
  </form>
</div>
  </div>
  );
}
