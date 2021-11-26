import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Home, Register, Login, Detail, Recommendation } from 'pages'

import './index.css'

const App = () => {
  return (
    <div>
      <Routes>
           <Route path='/' element={<Register/>}/>
           <Route path="/login" element={<Login/>}/> 
          <Route path="/home" element={<Home/>}/> 
          <Route path="/detail" element={<Detail/>}/>
          <Route path='/recommend' element={<Recommendation/>}/>
      </Routes>
    </div>
  );
};
  
ReactDOM.render(<BrowserRouter>
                  <App />
                </BrowserRouter>, 
                document.getElementById("app"));