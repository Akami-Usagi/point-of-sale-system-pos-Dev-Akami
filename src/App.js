import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Main from "./pages/main";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
