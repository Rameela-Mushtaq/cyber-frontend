import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import MenuBar from "../components/dashboard/MenuBar";


const Admin = () => {
  return (
    <div className="w-full min-h-screen flex justify-between overflow-auto relative">
      {/* Sidebar or Admin Menu can be added here */}
      <div className='fixed max-h-screen overflow-auto custom-scrollbar inset-0 z-50 transition-transform transform -translate-x-full md:static md:translate-x-0 xl:w-[16%] lg:w-[23%] md:w-[26%] w-[70%] font-hind'>
      <Sidebar />
      </div>


      <div className="flex-1 xl:w-[84%] w-full lg:w-[77%] md:w-[74%] max-h-screen custom-scrollbar overflow-auto">
        <MenuBar />
      <Outlet /> {/* This will render admin pages */}  
      </div>
        
    </div>
  );
};

export default Admin;
