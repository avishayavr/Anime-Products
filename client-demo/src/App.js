import './App.css';
import {Routes, Route} from "react-router-dom"
// import Login from './Components/Singup/Login';
import Singup from './Components/Singup/Singup';
import Products from './Components/Main/Products';
import LoginPage from './Components/Singup/LoginPage';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='singup' element={<Singup/>}/>
      <Route path='products' element={<Products/>}/>
     </Routes>
    </div>
  );
}

export default App;
