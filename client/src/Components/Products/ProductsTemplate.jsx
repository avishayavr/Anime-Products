import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import LoadingPage from "../Loading/LoadingPage";

export default function ProductTemplate() {
  // const [loading, setLoading] = useState(false)
  const [productsData, setProductsData] = useState([]);

  // function tpo get data using axios
  const getData = async () => {
    // setLoading(true);
    const { data } = await axios.get("https://nice-ox-windbreaker.cyclic.app/api/products");
    // setLoading(false)
    setProductsData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=" border-2 border-black dark:bg-black grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 rounded-xl">
     {
    //  loading ? <LoadingPage/> :
      productsData?.map((product, i) => (
        <Link key={i} to={`/product/${product._id}`} className="group m-4">
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
            <img
              src={product.image}
              alt={product.imageAlt}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h4 className="mt-4 text-md  text-[#fff]">{product.title}</h4>
          <div className="flex justify-evenly items-center text-[#fff]">
          <p className="mt-1 text-xl font-medium ">
            ${product.price}
          </p>
          {/* <button className="border border-[#fff] p-1 mt-3 rounded-xl">Add to cart</button> */}
          </div>
        </Link>
      ))}
    </div>
  );
}
