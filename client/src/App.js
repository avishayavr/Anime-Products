import './App.css';
import {Routes, Route} from "react-router-dom"
import Login from './Components/Singup/Login';
import Singup from './Components/Singup/Singup';
import Products from './Components/Main/Products';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='singup' element={<Singup/>}/>
      <Route path='products' element={<Products/>}/>
     </Routes>
    </div>
  );
}

export default App;
