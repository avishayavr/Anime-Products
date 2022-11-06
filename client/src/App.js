import './App.css';
import {Routes, Route} from "react-router-dom"
import LoginPage from './Components/Login/LoginPage';
import SingupPage from './Components/Login/SingupPage'
import MainPage from './Components/Main/MainPage'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='singupPage' element={<SingupPage/>}/>
        <Route path='/products' element={<MainPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
