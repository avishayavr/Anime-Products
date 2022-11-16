import axios from "axios";
import React, { useState } from "react";


export default function ProductDemo({ productData }) {
    // console.log(productData);

    // state for the cart new product quantity
  const [cartProductQuantity, setCartProductQuantity] = useState(0);


//   function to add product to cart
const addToCart = async ()=>{
    const cartProduct = {title: productData.title, price: Number(productData.price * cartProductQuantity), quantity: +cartProductQuantity, image:productData.image};
    const response = await axios.post('http://localhost:8000/api/cart', cartProduct)
    
} 



  return (
    
    <div className=" flex justify-center mt-3">
      <div className="bg-[#aaa] rounded-xl  flex flex-col sm:flex-row justify-evenly p-7">
        {/* left side */}
        <div className="border flex items-center p-10 border-[#2d2d2d] ">
          <img className="border-2 w-100 rounded-md" src={productData.image} alt="" />
        </div>

        {/* right side */}
        <div className="border border-[#2d2d2d] p-10 flex justify-between flex-col text-xl ">
          {/* div for text  */}
          <div className="p-5 text-[#2d2d2d]">
            <h1 className="font-bold">{productData.title}</h1>
            <p className="flex justify-start">{productData.price}$</p>
          </div>

          {/* Sizes */}
          {/* <div className="mt-10 p-5">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium text-[#2d2d2d]">Size</h4>
              <a
                href="#"
                className="text-sm font-medium text-[#2d2d2d]"
              >
                Size guide
              </a>
            </div>

            <RadioGroup
              value={selectedSize}
              onChange={setSelectedSize}
              className="mt-4"
            >
              <RadioGroup.Label className="sr-only">
                Choose a size
              </RadioGroup.Label>
              <div className="grid grid-cols-4 gap-4">
                {!sizes.map((size) => (
                  <RadioGroup.Option
                    key={size.name}
                    value={size}
                    disabled={!size.inStock}
                    className={({ active }) =>
                      classNames(
                        size.inStock
                          ? "bg-[#fff] shadow-sm text-[#2d2d2d] cursor-pointer"
                          : "bg-gray-50 text-gray-200 cursor-not-allowed",
                        active ? "ring-2 ring-[#2d2d2d]" : "",
                        "group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1"
                      )
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <RadioGroup.Label as="span">
                          {size.name}
                        </RadioGroup.Label>
                        {size.inStock ? (
                          <span
                            className={classNames(
                              active ? "border" : "border-2",
                              checked
                                ? "border-[#2d2d2d]"
                                : "border-transparent",
                              "pointer-events-none absolute -inset-px rounded-md"
                            )}
                            aria-hidden="true"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                          >
                            <svg
                              className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              stroke="currentColor"
                            >
                              <line
                                x1={0}
                                y1={100}
                                x2={100}
                                y2={0}
                                vectorEffect="non-scaling-stroke"
                              />
                            </svg>
                          </span>
                        )}
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div> */}

          <input name="quantity" type="Number" onClick={(e)=> setCartProductQuantity(e.target.value)}/>

          {/* button */}
          <button
          onClick={addToCart}
            type="submit"
            className="mt-6 flex w-full justify-center  rounded-md border-2 border-transparent  hover:border-[#2d2d2d] bg-[#2d2d2d] py-3 px-8 text-base font-medium text-white hover:bg-[#fff] hover:text-[#2d2d2d]"
          >
            Add to bag
          </button>
        </div>
      </div>
    </div>

    // new demo
//  <div className="flex justify-center ">   
// <div className = "flex sm:flex-row flex-col items-center w-full max-w-xl bg-[#aaa] rounded-lg shadow-md border-[#2d2d2d] border-solid">
//     <a href="#">
//         <img className = "p-8 rounded-t-lg" src={product.image} alt="product image"/>
//     </a>
//     <div className = "px-5 pb-5">
//         <a href="#">
//             <h5 className = "text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
//         </a>
//         <div className = "flex justify-between items-center">
//             <span className = "text-3xl font-bold text-gray-900 dark:text-white">{product.price}$</span>
//             <a href="#" className = "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
//         </div>
//     </div>
// </div>
// </div>

  );
}
