import React from 'react'
import FullNavbar from '../Components/Navbar/FullNavbar'
import Header from '../Components/Main/Header'
import Footer from "../Components/Footer/Footer"
import SectionOne from '../Components/Main/SectionOne'

export default function HomePage() {
  return (
    <div className='container'>
      <FullNavbar/>
      <Header/>
      <SectionOne/>
      <Footer/>
    </div>
  )
}
