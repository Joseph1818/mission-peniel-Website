import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./components/login-register";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
