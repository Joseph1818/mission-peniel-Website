import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./components/login-register";
import ContactUs from "./pages/contactUs";
import Giving from "./pages/giving";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Giving" element={<Giving />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
