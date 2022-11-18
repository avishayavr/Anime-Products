import "./App.css";
import { Routes, Route } from "react-router-dom";
// import LoginPage from './Components/Login/LoginPage';
// import SingupPage from './Components/Login/SingupPage'
// import MainPage from './Components/Main/MainPage'
// import Products from './Components/Products/Products';
// import ProductPage from './Components/Products/ProductPage';
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import ProductPage from "./Pages/ProductPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import CheckoutPage from "./Pages/CheckoutPage";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<InitialPage/>} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
