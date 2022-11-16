import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../FirebaseSingup/firebaseConfig";
import { signOut } from "firebase/auth";
import { BsFillBagFill } from "react-icons/bs";
import Cart from "../CartAndCheckout/Cart";
import axios from "axios";
import { useEffect } from "react";

export default function Navbar() {
    const [cart, setCart] = useState([])
    const [open, setOpen] = useState(false)

    // getting the cart data
    const getCart = async ()=>{
        const {data} = await axios.get('http://localhost:8000/api/cart')
        console.log(data);
        setCart([...data])
    }

    // function to delete the product in the cart 
const deleteProductCart = async (id)=>{
  await axios.delete(`http://localhost:8000/api/cart/${id}`)
  console.log(id);
  }

    // function to change the open state
    const openCart = ()=>{
        setOpen(true)
    }


  const navigate = useNavigate();

  // function to logout
  const logOut = () => {
    // console.log(auth);
    signOut(auth);
    navigate("/");
  };

  useEffect(()=>{
    getCart();
  },[])

  return (
    <div className="bg-[#2d2d2d] flex justify-between items-center">
      {/* left side of the navbar */}
      <div className="flex items-center text-[#fff]">
        <h1 className="p-3 font-bold text-4xl">AA.</h1>
        {/* div for links and log out */}
        <div className="flex p-3">
          <p className="p-3">
            <Link to={"/products"}>Products</Link>
          </p>
          <button className="p-3" onClick={() => logOut()}>
            Log Out
          </button>
        </div>
      </div>

      {/* right side of the navbar */}
      <div className="text-[#fff] relative flex justify-center p-3 hover:cursor-pointer" onClick={openCart}>
        <BsFillBagFill className="text-3xl" />
        <span className="absolute top-4  text-[#2d2d2d]">{cart.length}</span>
      </div>
      <Cart open={open} setOpen={setOpen} products={cart} deleteProduct={deleteProductCart}/>
    </div>
  );
}
