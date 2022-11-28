import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProductTemplate() {
  const [productsData, setProductsData] = useState([]);

  // function tpo get data using axios
  const getData = async () => {
    const { data } = await axios.get("http://localhost:8000/api/products");
    setProductsData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-[#aaa] opacity-60 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 rounded-xl">
      {productsData?.map((product, i) => (
        <Link key={i} to={`/product/${product._id}`} className="group m-4">
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
            <img
              src={product.image}
              alt={product.imageAlt}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-[#fff]">{product.title}</h3>
          <p className="mt-1 text-lg font-medium text-[#fff]">
            ${product.price}
          </p>
        </Link>
      ))}
    </div>
  );
}
