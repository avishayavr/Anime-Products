import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ProductDemo from './ProductDemo'

export default function ProductPage() {

    const {id} = useParams();

    useEffect(()=>{
        console.log(id);
    },[])

  return (
    <div>ProductPage<br/>
    <ProductDemo/>
    </div>
  )
}
