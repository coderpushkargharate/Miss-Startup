import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
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
import Login from "./login/Login";
import StartupCourse from "./pages/StartupCourse";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <AppContent isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
    </BrowserRouter>
  );
};

const AppContent = ({ isAuthenticated, setIsAuthenticated }) => {
  const location = useLocation();
  const shouldShowHeaderFooter = !["/login", "/dashboard"].includes(location.pathname);

  return (
    <>
      {shouldShowHeaderFooter && (
        <>
          <Navbar />
        </>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/mainideas" element={<Mainideas />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/startupcourse" element={<StartupCourse/>}/>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />}
        />
      </Routes>
      {shouldShowHeaderFooter && <Footer />}
    </>
  );
};

export default App;
