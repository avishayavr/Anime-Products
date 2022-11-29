import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import ProductPage from "./Pages/ProductPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import CheckoutSuccess from "./Components/CartAndCheckout/CheckoutSuccess";
import FullNavbar from "./Components/Navbar/FullNavbar";


function App() {
  return (
    <div className="App bg-[#2d2d2d] dark:bg-[#fff]">
      <FullNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="/checkoutSuccess" element={<CheckoutSuccess />} />
      </Routes>
    </div>
  );
}

export default App;
