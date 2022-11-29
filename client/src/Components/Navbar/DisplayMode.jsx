import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { MdOutlineLightMode } from "react-icons/md";


export default function DisplayMode({changeBgFun}) {

    const [theme, setTheme] = useState("dark");

    useEffect(()=>{
        if(theme === "light"){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
    },[theme])

    const handleThemeSwitch = ()=>{
        setTheme(theme === "light" ? "dark" : "light")
    }

  return (
    <div onClick={()=> handleThemeSwitch()}>
    <MdOutlineLightMode className="text-4xl text-[#fff]" />
    </div>
  )
}
