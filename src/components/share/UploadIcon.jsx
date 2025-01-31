import React from "react";

const UploadIcon = ({ message }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="text-white text-center">
        <p className="text-lg font-semibold">{message || "Uploading..."}</p>
      </div>
    </div>
  );
};

export default UploadIcon;
