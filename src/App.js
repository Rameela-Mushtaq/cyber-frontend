import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";
import Tips from "./pages/Tips";
import Login from "./components/signIn/Login";
import InfoGraphics from "./pages/InfoGraphics";
import Home from "./pages/Home";
//import ProtectedRoute from './components/signIn/ProtectedRoute';
import Register from "./components/signIn/Register";
import VerifyOtp from "./components/signIn/OtpVerify";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp-verify" element={<VerifyOtp />} />

        {/* Protected Routes */}
        <Route path="/tips" element={<Tips />} />
        <Route path="/infographics" element={<InfoGraphics />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
