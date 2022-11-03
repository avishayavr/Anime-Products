import './App.css';
import {Routes, Route} from "react-router-dom"
// import LoginPage from './Components/Login/LoginPage';
import LoginDemo from './Components/Login/LoginDemo';
import MainPage from './Components/Main/MainPage'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginDemo/>} />
        <Route path='products' element={<MainPage/>}/>
      </Routes>
      <LoginDemo/>
    </div>
  );
}

export default App;
