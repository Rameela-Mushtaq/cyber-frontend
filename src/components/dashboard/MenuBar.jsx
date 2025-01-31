import React, { useState } from "react";
import { IoSearchOutline, IoChevronDownOutline } from "react-icons/io5";
import profile from "../../assets/icons/profile.png";
import bell from "../../assets/icons/bell.png";
import MobileNav from "./MobileNav";
import { RiMenu3Fill } from "react-icons/ri";
import { useSelector } from "react-redux";

const MenuBar = () => {
  const user = useSelector((state) => state.user?.user);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false); // State to control the mobile nav

  // Toggle the mobile nav visibility
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMenu = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <div>
      <div className="sticky md:z-50 z-40 top-0 w-full">
        <div className="flex justify-between w-full border-b bg-white border-bordered p-3 px-6">
          <div className="w-[35%] bg-[#F5F6FA] border border-bordered px-4 p-1.5 rounded-full md:flex hidden items-center gap-2">
            <IoSearchOutline className="w-fit" />
            <input
              type="text"
              className="outline-none bg-transparent placeholder:text-[#202224]"
              placeholder="Search"
            />
          </div>

          <div className="md:flex hidden items-center gap-5 w-[50%] justify-end">
            <div className="pr-2">
              <img src={bell} alt="bell" />
            </div>
            <div>
              <img src={profile} alt="profile" />
            </div>

            <div className="text-[#404040] pr-6">
              <h1 className="font-bold text-sm">{user?.name || ""}</h1>
              <p className="text-xs font-semibold">Admin</p>
            </div>

            <div className=" border w-8 h-8 flex items-center justify-center rounded-full">
              <IoChevronDownOutline />
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <button className="block md:hidden text-xl" onClick={toggleMobileNav}>
            <RiMenu3Fill />
          </button>

          {/* Mobile Profile Section */}
          <div className="md:hidden flex items-center gap-3">
            <div>
              <img src={profile} alt="profile" />
            </div>
            <div className="text-[#404040]">
              <h1 className="font-bold text-sm">{user?.name || ""}</h1>
              <p className="text-xs font-semibold">Admin</p>
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally render MobileNav based on isMobileNavOpen */}
      {isMobileNavOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
        >
          <MobileNav />
        </div>
      )}
    </div>
  );
};

export default MenuBar;
