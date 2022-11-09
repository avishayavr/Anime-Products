import './App.css';
import {Routes, Route} from "react-router-dom"
import LoginPage from './Components/Login/LoginPage';
import SingupPage from './Components/Login/SingupPage'
import MainPage from './Components/Main/MainPage'
import Products from './Components/Products/Products';
import ProductPage from './Components/Products/ProductPage';

// import ProductsTemplate from './Components/Products/ProductsTemplate';
// import LoginDemo from './Components/Login/templateDemo';
// import InitialPage from './Components/Login/InitialPage';
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<InitialPage/>} /> */}
        <Route path='/' element={<LoginPage/>} />
        <Route path='singupPage' element={<SingupPage/>}/>
        <Route path='main' element={<MainPage/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='product/:id' element={<ProductPage/>}/>
        {/* <Route path='product/:id' element={<Products/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
