import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProductsTemplate from './ProductsTemplate'

export default function Products() {
 
    // using useSelector to get my data from the reducer
    const products = useSelector((state) => state.products)
    
    useEffect(()=>{
              console.log(products);
    },[])

  return (
    <div>Products<br/>
    <ProductsTemplate productsData={products}/>
    </div>
  )
}
