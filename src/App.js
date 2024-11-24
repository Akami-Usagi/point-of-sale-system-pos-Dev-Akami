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
import ProductEdit from "./pages/productEdit";

import { useState } from "react";




function App() {

  const [productData, setProductData] = useState(null);



  return (
    <Router>
      <AppHeader/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/recovery" element={<PasswordRecovery/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/products" element={<Products setData={setProductData}/>}/>
        <Route path="/products/details/*" element={<ProductDetails data={productData} setData={setProductData}/>}/>
        <Route path="/products/new-product" element={<NewProduct/>}/>
        <Route path="/products/product-edit/*" element={<ProductEdit data={productData}/>}/>
        
        


      </Routes>
    </Router>
  );
}

export default App;
