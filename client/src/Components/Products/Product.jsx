import React from "react";
import { useParams } from "react-router-dom";
import ProductDemo from "./ProductDemo";
import { useSelector } from "react-redux";

export default function Product() {
  const { id } = useParams();
  console.log(id);

  const product = useSelector((state) =>
    state.products.value.find((product) => product._id == id)
  );
  console.log(product);
  return (
    <div>
      <ProductDemo productData={product} />
    </div>
  );
}
