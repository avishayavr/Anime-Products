import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function ProductRelative({currentProduct}) {
    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    const {id} = useParams();

    // function to get relative data
    const getData = async () =>{
        const {data} = await axios.get("http://localhost:8000/api/products");
        let newData = [...data]

        const currentProductTitle = currentProduct.title?.split(" ")[0];

        let relativeProducts = newData.filter(product=> product.title.includes(currentProductTitle));
        setProducts(relativeProducts);
        console.log(relativeProducts);
    }

    useEffect(()=>{
        getData()
    }, [id])

  return (
   <div className='m-5 bg-[#aaa] rounded-xl'>
    <h1 className='text-2xl text-[#fff]'>Related Products</h1>
     <div className='flex justify-evenly m-2'>
        {products.map((product, i)=>{
            return(
                // <Link  >
                <div  key={i} to={`/product/${product._id}`} className="m-2 w-1/4 cursor-pointer" onClick={()=> navigate(`/product/${product._id}`)}>
                    <img src={product.image} className="w-full"/>
                    <h2 className='text-2xl text-[#fff]'>{product.title}</h2>
                </div>
                // </Link>
            )
        })}
    </div>
   </div>
  )
}
