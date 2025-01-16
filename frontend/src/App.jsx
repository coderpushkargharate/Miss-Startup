import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

import Home from "./pages/Home";

import Blog from "./pages/Blog";
import Dashboard from "./pages/Dashboard";
import Mainideas from "./pages/MainIdeas";
import CourseDetails from "./pages/CourseDetails";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/mainideas" element={<Mainideas/>}/>
        <Route path="/courses/:id" element={<CourseDetails/>} />
        <Route path="/aboutus" element={<AboutUs/>}/>
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
