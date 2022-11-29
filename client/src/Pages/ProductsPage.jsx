import React from 'react'
import FullNavbar from '../Components/Navbar/FullNavbar'
import Products from '../Components/Products/Products'
import Footer from "../Components/Footer/Footer"


export default function ProductsPage() {
  return (
    <div >
      <div className='container '>
      {/* <FullNavbar/> */}
      <Products/>
      <Footer/>
    </div>
    </div>
  )
}
