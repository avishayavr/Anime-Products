import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import ProductPage from "./Pages/ProductPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import CheckoutSuccess from "./Components/CartAndCheckout/CheckoutSuccess";
import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
import { addProduct } from "./redux/cartReducer";
import { useEffect } from "react";


function App() {
  // const cart = useSelector((state) => state.cart.value);
  // console.log(products);
  const dispatch = useDispatch();


  const getData = () => {
    // const { data } = await axios.get("http://localhost:8000/api/products");

    let storage = []
    Object.keys(sessionStorage).forEach(key=>{
      storage.push(JSON.parse(sessionStorage.getItem(key)))
    })
     
    if (storage.length == 0) storage.map(product => dispatch(addProduct(product)))
    // console.log(cart);
  };

  useEffect(() => {
    // getData();
    // console.log(cart);
  }, []);

  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<InitialPage/>} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="/checkout-success" element={<CheckoutSuccess/>} />
      </Routes>
    </div>
  );
}

export default App;
