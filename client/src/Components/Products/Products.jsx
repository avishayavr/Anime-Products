import React, { useState, useEffect } from "react";
import ProductsTemplate from "./ProductsTemplate";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

export default function Products() {
  const [products, setProducts] = useState([]);

  const getData = async ()=> {
    const {data} = await axios.get('http://localhost:8000/api/products')
    setProducts([...data])
  }


  useEffect(() => {
    getData();
}, []);


  return (
    <div>
      <Navbar/>
      <br />
      <ProductsTemplate productsData={products} />
    </div>
  );
}
