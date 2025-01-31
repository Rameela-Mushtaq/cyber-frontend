import React from "react";

const CustomInput2 = ({ label, type, name, placeholder, value, onChange, error,  isTextarea = false }) => {
    return (
        <div className="w-full ">
            <label className="text-label text-base font-medium">
                {label}
            </label>
            {isTextarea ? (
                <textarea
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="w-full px-4 py-7 h-40 outline-none text-contents"
                />
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    name={name}
                    onChange={onChange}
                    className="w-full px-4 md:py-4 py-2 md:mt-3 mt-1 outline-none text-contents"
                />
            )}
            {error && <span className="text-red-600 text-sm">{error}</span>}
        </div>
    );
};

export default CustomInput2;
