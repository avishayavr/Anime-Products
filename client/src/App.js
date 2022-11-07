import './App.css';
import {Routes, Route} from "react-router-dom"
import LoginPage from './Components/Login/LoginPage';
// import SingupPage from './Components/Login/SingupPage'
import MainPage from './Components/Main/MainPage'
import LoginDemo from './Components/Login/templateDemo';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/login' element={<LoginDemo/>} />
        {/* <Route path='singupPage' element={<SingupPage/>}/> */}
        <Route path='/products' element={<MainPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
