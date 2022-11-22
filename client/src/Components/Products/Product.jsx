import React from "react";
import { useParams } from "react-router-dom";
import ProductDemo from "./ProductDemo";
import { useSelector } from "react-redux";
// import {auth} from "../FirebaseSingup/firebaseConfig"
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useEffect } from "react";

export default function Product() {
  const { id } = useParams();
  // console.log(id);

  // const [user] = useAuthState(auth);
  // console.log(user.email);


  const product = useSelector((state) =>
    state.products.value.find((product) => product._id == id)
  );
  // console.log(product);

  

  // useEffect(()=>{
  //   console.log(user);
  // },[])

  return (
    <div>
      <ProductDemo productData={product}
       />
    </div>
  );
}
