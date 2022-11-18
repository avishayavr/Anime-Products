import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductDemo from "../Components/Products/ProductDemo";


export default function ProductPage() {
  const [product, setProduct] = useState({})
  const { id } = useParams;

  const productFromSelector = useSelector((state) => state.products.value.find(product => product.id == id) );
console.log(product);
  const getProduct = () =>{
    setProduct(productFromSelector)
  }

  useEffect(()=>{
    getProduct();
  },[])

  return (
    <div>
      ProductPage<br/>
      <ProductDemo productData={product}/>
    </div>
  )
}
