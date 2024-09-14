import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppHeader from "./components/appHeader";
import Login from "./pages/login";
import Register from "./pages/register";
import PasswordRecovery from "./pages/passwordRecovery";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import Products from "./pages/products";
import ProductDetails from "./pages/productDetails";
import NewProduct from "./pages/newProduct";

function App() {
  return (
    <Router>
      <AppHeader/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/recovery" element={<PasswordRecovery/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/details" element={<ProductDetails/>}/>
        <Route path="/products/new-product" element={<NewProduct/>}/>


      </Routes>
    </Router>
  );
}

export default App;
