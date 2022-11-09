import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import ProductDemo from './ProductDemo'

export default function ProductPage() {

    const {id} = useParams();
    const products = useSelector((state) => state.products);
    const product = products.find(product=> product._id == id);

    useEffect(()=>{
        console.log(id);
        console.log(product);
    },[])

  return (
    <div>ProductPage<br/>
    <ProductDemo product={product}/>
    </div>
  )
}
