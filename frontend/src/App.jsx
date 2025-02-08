import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Blog from "./pages/Blog/Blog";
import Mainideas from "./pages/Ideas/MainIdeas";
import AboutUs from "./pages/About/AboutUs";
import Login from "./login/Login";
import StartupCourse from "./pages/StartupCourse/StartupCourse";
import FAQ from "./pages/FAQ/Faq";
import Home from "./pages/Home/Home";
import Dashboard from "./dashboard/Dashboard";
import ContactUs from "./pages/ContactUs/ContactUs";
import BlogDetail from "./pages/Blog/BlogDetail";
import PrivacyPolicy from "./pages/Privacy Policy/Privacy Policy";
import RefundPolicy from "./pages/RefundPolicy/RefunPolicy";


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
      {shouldShowHeaderFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/blog/:blogId" element={<BlogDetail/>}/> */}
        {/* <Route path="/course/:courseId" element={<CourseDetails />} /> */}
        <Route path="/mainideas" element={<Mainideas />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/startupcourse" element={<StartupCourse />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/RefundPolicy" element={<RefundPolicy/>} />

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
