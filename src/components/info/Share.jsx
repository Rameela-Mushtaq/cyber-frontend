import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FiCopy } from "react-icons/fi";

const Share = ({ isOpen, onClose, shareData, url }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url)
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000); // Hide success message after 2 seconds

  };

  if (!isOpen) return null;

  return (
    <div onClick={onClose} className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center">
      <div
        onClick={(e) => {
          e.preventDefault(); // Prevent default behavior
          e.stopPropagation(); // Stop propagation to the outer container
          // Your logic here
        }}
        className="fixed xl:w-[45%] md:w-[48%] sm:w-[80%] w-[90%] max-h-[96%] custom-scrollbar flex flex-col gap-4 overflow-auto justify-between bg-white px-4 py-3 rounded-lg shadow-lg">
        <div className="w-full bg-white rounded-2xl sm:p-5 p-2 flex flex-col md:gap-10 gap-6">
          {/* title and close icon */}
          <div className="flex justify-between w-full items-center">
            <div className="text-blue font-semibold">Share with</div>
            <RxCross2 className="text-2xl text-border hover:text-orange" onClick={onClose} />
          </div>

          {/* social icons */}
          <div className="grid grid-cols-3 lg:grid-cols-6 items-center gap-3 w-full justify-between flex-wrap md:pt-5 pt-2">
            {shareData.map((item, index) => (
              <div key={index} className="flex group cursor-pointer items-center flex-col md:gap-6 gap-3">
                <div className="p-3 rounded-full border group-hover:bg-orange">{item.icon}</div>
                <div className="text-blue group-hover:text-orange text-sm">{item.title}</div>
              </div>
            ))}
          </div>

          {/* input and copy icon */}
          <div className="md:p-4 p-3 border flex justify-between items-center rounded-lg">
            <input
              type="text"
              value={url} // Pre-populate with the URL
              readOnly // Make the input read-only so users cannot modify it
              className="lg:w-full outline-none"
            />
            <FiCopy className="text-2xl cursor-pointer" onClick={handleCopy} />
            {copySuccess && <span className="text-green-500 ml-2">Copied!</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
