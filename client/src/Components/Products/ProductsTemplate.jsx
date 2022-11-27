import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'




export default function ProductTemplate() {
  // const navigate = useNavigate()

  const [productsData, setProductsData] = useState([])

  const getData = async () => {
    const { data } = await axios.get("http://localhost:8000/api/products");
    setProductsData(data)
    // console.log(productsData);
    };

    useEffect(()=>{
getData()
    }, [])

  return (
  //   <div className="bg-[#fff]">
  //   <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
  //      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> 

  //         {/* <button onClick={click}>V</button> */}
  //     <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
  //         {/* iteration on the data */}
  //       {productsData?.map((product, i) => (
  //         // first div for img
  //          <div key={i} className="group relative"> 
  //           <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
  //             <img
  //             src={product.image}
  //                alt={""} 
  //               className="h-full w-full object-cover object-center lg:h-full lg:w-full"
  //              />
  //            </div>
  //            {/* seconde div for link and price */}
  //            <div className="mt-4 flex justify-between">
  //              <div>
  //                <h3 className="text-sm text-gray-700">
  //                   <Link to={`/product/${product._id}`}>
  //                    <span aria-hidden="true" className="absolute inset-0" />
  //                    {product.title}
  //                  </Link> 
  //                </h3>
  //                {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
  //              </div>
  //              <p className="text-sm font-medium text-gray-900">{product.price}$</p>
  //            </div>
  //          </div>
  //        ))}
  //      </div>
  //    </div>
  //  </div>
  // <div >
    <div className="bg-[#aaa] grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 rounded-xl">
          {productsData?.map((product) => (
            <Link key={product.id} to={`/product/${product._id}`} className="group m-5">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-[#fff]">{product.title}</h3>
              <p className="mt-1 text-lg font-medium text-[#fff]">${product.price}</p>
            </Link>
          ))}
        </div>
  // </div>
  )
}
