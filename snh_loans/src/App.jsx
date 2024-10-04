import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import Apply from './components/Apply';
import Calculator from './components/Calculator';
import Help from './components/Help';
import Registration from './components/Registration';
import OTP from './components/OTP';
import Dashboard from './components/Dashboard';


function App() {

  return (
<div>
<Router>
  <Routes>
  <Route path="/" element={<Home />} /> 
  <Route path="/SignUp" element={<Registration />} /> 
  <Route path="/login" element={<Login />} /> 
  <Route path="/apply" element={<Apply />} /> 
  <Route path="/calculator" element={<Calculator />} /> 
  <Route path="/help" element={<Help />} /> 
  <Route path="/otp" element={<OTP />} /> 
  <Route path="/dashboard" element={<Dashboard />} /> 
  </Routes>
</Router>
</div>
  )
}

export default App
