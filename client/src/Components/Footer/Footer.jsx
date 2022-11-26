import React from 'react';
import {BsInstagram, BsFacebook, BsLinkedin, BsGithub} from "react-icons/bs"

export default function App() {

  const links = [
    {icon: <BsFacebook/>, link: ""},
    {icon: <BsGithub/>, link: ""},
    {icon: <BsInstagram/>, link: ""},
    {icon: <BsLinkedin/>, link: ""},
  ]

  return (
    <div className='bg-black text-center text-white'>
      <div className='p-4 pb-0 flex justify-center'>
        <div className='mb-4 p-4 flex border border-white'>
          {links.map(icon=>{
            return(
              <div className='m-2'>
                {icon.icon}
              </div>
            )
          })}
        </div>
      </div>

      <div className='text-center p-3 bg-[#2d2d2d]' >
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </div>
  );
}