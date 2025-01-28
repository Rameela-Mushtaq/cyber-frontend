import React from 'react'
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const CustomInput = ({
  value,
  type,
  name,
  onChange,
  label,
  errors,
  placeholder,
}) => {
    const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full flex flex-col md:gap-2 gap-1 relative">
       <label htmlFor="email" className="text-primary text-lg">
        {label}
      </label>

      <div className="relative w-full flex flex-col">
      <input
          type={
            name === "password"
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="p-4 rounded-sm  text-secondary md:text-lg text-base focus-within:outline-none focus-within:ring-1 focus-within:ring-orange"
        />
        {/* Show/Hide Password */}
        {(name === "password") && (
          <div
            className="absolute bottom-6 right-5 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </div>
        )}
      </div>
      {errors && <span className="text-red-600 text-sm">{errors}</span>}
    </div>
  )
}

export default CustomInput
