import React from "react";
import { useNavigate } from "react-router-dom";
// import { auth } from "../FirebaseSingup/firebaseConfig";
// import { signOut } from "firebase/auth";
import { BsFillBagFill } from "react-icons/bs";
// import Cart from "../CartAndCheckout/Cart";
// import axios from "axios";
// import { useAuthState } from "react-firebase-hooks/auth";

export default function Navbar({openCart, logOut, user}) {
  // const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  // // user
  // const [user] = useAuthState(auth);

  // // function to change the open state
  // const openCartFun = () => {
  //   setOpen(!open);
  // };

  // // function to logout
  // const logOutFun = () => {
  //   // console.log(auth);
  //   signOut(auth);
  //   navigate("/");
  // };

  // useEffect(() => {
  //   console.log(user);
  // }, []);

  return (
    <div className="bg-[#2d2d2d] flex justify-between items-center">
      {/* left side of the navbar */}
      <div className="flex items-center text-[#fff]">
        <h1 className="p-3 font-bold text-4xl">AA.</h1>
        {/* div for links and log out */}
        <div className="flex p-3">
          <button
            className="p-3"
            onClick={() => {
              user ? navigate("/products") : prompt("Login to continue");
            }}
          >
            Products
          </button>
          <button
            className="p-3"
            onClick={() => {
              user ? logOut() : navigate("/login");
            }}
          >
            {user ? "Logout" : "Login"}
          </button>
        </div>
      </div>

      {/* right side of the navbar */}
      <div
        onClick={openCart}
        className="text-[#fff] relative flex justify-center p-3 hover:cursor-pointer">
        <BsFillBagFill className="text-3xl"/>
        <span className="absolute top-4  text-[#2d2d2d]">0</span>
      </div>
      {/* <Cart open={open} setOpen={setOpen} /> */}
    </div>
  );
}
