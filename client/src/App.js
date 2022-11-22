import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import ProductPage from "./Pages/ProductPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import CheckoutSuccess from "./Components/CartAndCheckout/CheckoutSuccess";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addUser } from "./redux/ProductsReducer";
import { useEffect } from "react";


function App() {
  const products = useSelector((state) => state.products.value);
  // console.log(products);
  const dispatch = useDispatch();


  const getData = async () => {
    const { data } = await axios.get("http://localhost:8000/api/products");
    if (products.length == 0) data.map((product) => dispatch(addUser(product)));
  };

  useEffect(() => {
    getData();
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
