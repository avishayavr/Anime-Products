import React from 'react'
import FullNavbar from '../Components/Navbar/FullNavbar'
import Header from '../Components/Main/Header'
import SectionOne from '../Components/Main/SectionOne'
import SectionTwo from '../Components/Main/SectionTwo'
import Footer from "../Components/Footer/Footer"

export default function HomePage() {
  return (
    <div className='container bg-[#2d2d2d]'>
      <FullNavbar/>
      <Header/>
      <SectionOne/>
      <SectionTwo/>
      <Footer/>
    </div>
  )
}
