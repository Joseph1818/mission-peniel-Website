import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import ContactUs from "./pages/contactUs";
import Giving from "./pages/giving";
import About from "./pages/about";
import Nextstep from "./pages/Nextstep";
import Inperson from "./pages/Inperson";
import Online from "./pages/Online";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Giving" element={<Giving />} />
          <Route path="/Inperson" element={<Inperson />}></Route>
          <Route path="/Nextstep" element={<Nextstep />}></Route>
          <Route path="/Online" element={<Online />}></Route>
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="*" element={<h1 className="not-found">404 page Not found</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
