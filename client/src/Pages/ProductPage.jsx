import React from "react";
import FullNavbar from "../Components/Navbar/FullNavbar";
import Product from "../Components/Products/Product";
import Footer from "../Components/Footer/Footer"


export default function ProductPage() {
  return (
    <div>
      <FullNavbar/>
      <Product />
      <Footer/>
    </div>
  );
}
