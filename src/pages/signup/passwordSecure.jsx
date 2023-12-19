import React, { useState } from "react";

const colors = ["#8F8F8F", "#4CAF50", "#009606"];

const PasswordSecure = ({ isSecure = true }) => {
  const colors = ["#8F8F8F", "#4CAF50", "#009606"];

  return (
    <span className="text-xs flex self-center">
      <span className="text-[#9FDBA1]">{isSecure ? "ایمن" : "ضعیف"}</span>
      <span className="flex mr-1">
        <span
          className={`
          ${isSecure ? "bg-[#8F8F8F]" : "bg-red-500"} 
           ml-1 translate-y-2 w-3 h-1  transition-all`}
        ></span>
        <span
          className={`
           ${isSecure ? "bg-[#4CAF50]" : "bg-red-600"}  
           ml-1 translate-y-2 w-3 h-1  transition-all`}
        ></span>
        <span
          className={`
          ${isSecure ? "bg-[#009606]" : "bg-red-700"} 
          ml-1 translate-y-2  w-3 h-1 transition-all`}
        ></span>
      </span>
    </span>
  );
};

export default PasswordSecure;
