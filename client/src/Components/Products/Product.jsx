import React from "react";
import { useParams } from "react-router-dom";
import ProductDemo from "./ProductDemo";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Product() {
  const [product, setProduct] = useState({}) 
  const { id } = useParams();


  // get the product data 
  const getProduct = async () =>{
    const {data} = await axios.get(`http://localhost:8000/api/products/${id}`)
    setProduct(data)
  }

  

  useEffect(()=>{
    getProduct()
  },[])

  return (
    <div>
      <ProductDemo productData={product}/>
      {/* <ProductRelative currentProduct={product}/> */}
    </div>
  );
}
