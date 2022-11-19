import React from "react";
import { useSelector } from "react-redux";
import ProductsTemplate from "./ProductsTemplate";
// import axios from "axios";
// import { addUser } from "../../redux/ProductsReducer";
// import { useEffect } from "react";

export default function Products() {
  // getting my global state with use selector
  const products = useSelector((state) => state.products.value);
  console.log(products);
  // const dispatch = useDispatch();

  // const getData = async () => {
  //   const { data } = await axios.get("http://localhost:8000/api/products");
  //   if(products.length == 0) data.map((product) => dispatch(addUser(product)));
  // };

  // useEffect(()=>{
  //   getData()
  // }, [])

  return (
    <div>
      Products <br/>
        <ProductsTemplate productsData={products}/>
    </div>
  )
}
