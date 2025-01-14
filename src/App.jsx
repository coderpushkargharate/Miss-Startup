import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

import Home from "./pages/Home";

import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/blog" element={<Blog />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
