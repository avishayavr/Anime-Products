import React from "react";
import FullNavbar from "../Components/Navbar/FullNavbar";
import Product from "../Components/Products/Product";
import Footer from "../Components/Footer/Footer";

export default function ProductPage() {
  return (
    <div className="bg-[#2d2d2d]">
      <div className="container ">
        <FullNavbar />
        <Product />
        <Footer />
      </div>
    </div>
  );
}
