import React from 'react'
import FullNavbar from '../Components/Navbar/FullNavbar'
import Products from '../Components/Products/Products'
import Footer from "../Components/Footer/Footer"


export default function ProductsPage() {
  return (
    <div className='bg-[#2d2d2d]'>
      <div className='container '>
      <FullNavbar/>
      <Products/>
      <Footer/>
    </div>
    </div>
  )
}
