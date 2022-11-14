import React from 'react'
import { Link } from 'react-router-dom'
import {auth} from '../FirebaseSingup/firebaseConfig'
import {signOut} from 'firebase/auth'
import {BsFillCartFill} from 'react-icons/bs'

export default function Navbar() {

    // function to logout 
const logOut = () => {
    console.log(auth);
    signOut(auth);
  }

  return (
    <div className='bg-[#2d2d2d] flex justify-between items-center'>
        {/* left side of the navbar */}
        <div className='flex items-center text-[#fff]'>
            <h1 className='p-3 font-bold text-4xl'>AA.</h1>
            {/* div for links and log out */}
            <div className="flex p-3">
            <p className='p-3'><Link to={"/products"}>Products</Link></p>
            <button className='p-3' onClick={()=> logOut()}>Log Out</button>
            </div>
        </div>

        {/* right side of the navbar */}
        <div className='text-[#fff]'>
         <BsFillCartFill className='text-2xl'/>
         <span className='top-1'>0</span>
        </div>

    
    </div>
  )
}
