import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { useFormContext } from "react-hook-form"; // Import useFormContext

const EmailField = ({ register, errors }) => {
  
  return (
    <>
      <div className=" space-y-1 py-1 text-right">
        <label htmlFor="userEmail" className="text-[0.82rem] mx-2">
          ایمیل
        </label>
        <div
          className={`relative flex justify-end rounded-2xl text-sm pr-3 py-5 overflow-hidden ring-1  ring-opacity-30
          ${errors.email ? 'ring-red-500' : 'ring-white'}`}
        >
          <input
            {...register("email", {
              required: 'Email address is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Email Address is invalid'
              }
            })}
            className="max-w-full min-w-full bg-transparent text-[0.9rem] focus:outline-none pl-11 placeholder:text-[#A4A4A4] pr-7"
            type="email"
            id="userEmail"
            placeholder="yourname@gmail.com"
          />
          <AiOutlineMail className="absolute top-0 bottom-0 h-full text-lg text-[#A4A4A4]" />
          <span className="absolute top-0 right-0 left-0 blur-md -bottom-7 bg-gradient-to-tl via-white/5 from-white/0 to-white/25 -z-10 via-40% "></span>
        </div>
      </div>
      {errors.email && (
        <p className="text-xs text-left italic text-red-300 ml-1">
          {errors.email.message}
        </p>
      )}
    </>
  );
};

export default EmailField;