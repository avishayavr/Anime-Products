import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import ProductDemo from './ProductDemo'

export default function ProductPage() {

  const [product, setProduct] = useState({})

    const {id} = useParams();
    // console.log(id);

    const getProduct = async ()=> {
      const {data} = await axios.get(`http://localhost:8000/api/products/${id}`)
      // console.log(data);
      setProduct(data)
    }
    

    useEffect(()=>{
        getProduct();
    },[])

  return (
    <div>
      <Navbar/>
      <br/>
    <ProductDemo productData={product} sizes={product.sizes}/>
    </div>
  )
}
