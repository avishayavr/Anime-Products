import axios from "axios";
import React from "react";

export default function CheckoutBtn({cartItems}) {
    
    const handleCheckout = ()=>{
       console.log(cartItems);
    }

  return (
    <div>
      <div className="mt-6" onClick={() => handleCheckout()}>
        <p className="flex items-center justify-center rounded-md border border-transparent  hover:border-[#2d2d2d] bg-[#2d2d2d]  px-6 py-3 text-base font-medium text-white hover:bg-[#fff] hover:text-[#2d2d2d] shadow-sm">
          Checkout
        </p>
      </div>
    </div>
  );
}
