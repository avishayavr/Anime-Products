import React from "react";
import { useParams } from "react-router-dom";
import ProductDemo from "./ProductDemo";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";
// import {auth} from "../FirebaseSingup/firebaseConfig"
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useEffect } from "react";

export default function Product() {
  const [product, setProduct] = useState({}) 
  const { id } = useParams();
  // console.log(id);

  // const [user] = useAuthState(auth);
  // console.log(user.email);


  // get the product data 
  const getProduct = async () =>{
    const {data} = await axios.get(`http://localhost:8000/api/products/${id}`)
    setProduct(data)
    // console.log(data);
  }

  

  useEffect(()=>{
    getProduct()
  },[])

  return (
    <div>
      <ProductDemo productData={product}
       />
    </div>
  );
}
