import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"

// import file for redux
import { createStore } from 'redux';
import {Provider} from 'react-redux'
import appReducer from './Components/Main/Reducer'

const appStore = createStore(appReducer);
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={appStore}>

  <BrowserRouter>
    <App />
  </BrowserRouter>

  </Provider>
);


