import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";

const User = () => {
  return (
    <>
      <Navbar />
      
        <Outlet /> {/* This will render child pages */}
    
      <Footer />
    </>
  );
};

export default User;
