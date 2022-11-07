import './App.css';
import {Routes, Route} from "react-router-dom"
import LoginPage from './Components/Login/LoginPage';
import SingupPage from './Components/Login/SingupPage'
import MainPage from './Components/Main/MainPage'
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
      </Routes>
    </div>
  );
}

export default App;
