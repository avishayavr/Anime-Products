import axios from "axios";
import React from "react";

const CheckoutBtn = ({ cartItems }) => {
  const handleCheckout = () => {
    // adding data to and url to checkout page
    axios
      .post("https://nice-ox-windbreaker.cyclic.app/api/stripe/create-checkout-session", {
        cartItems,
        userId: 1,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div onClick={() => handleCheckout()}>
      <div className="mt-6 cursor-pointer">
        <p className="flex items-center justify-center rounded-md border border-transparent  px-6 py-3 text-base font-medium shadow-sm bg-[#2d2d2d] text-[#fff] hover:bg-[#fff] hover:text-[#2d2d2d]">
          Checkout
        </p>
      </div>
    </div>
  );
};

export default CheckoutBtn;
