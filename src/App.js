import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Login from "./pages/login";
import Register from "./pages/register";
import PasswordRecovery from "./pages/passwordRecovery";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/recovery" element={<PasswordRecovery/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>

      </Routes>
    </Router>
  );
}

export default App;
