import React, { useState } from "react";
import { HiOutlineKey } from "react-icons/hi";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const LoginPasswordField = ({ register, errors }) => {
  const [isVisible, setisVisible] = useState(false);

  return (
    <>
      <div className=" space-y-1 py-1">
        <div className="flex justify-between">
          <label htmlFor="password" className="text-[0.82rem]">
            رمز عبور
          </label>
        </div>
        <div
          className={`relative rounded-2xl text-sm pr-3 py-5 overflow-hidden ring-1  ring-opacity-30
          ${errors.password ? "ring-red-500" : "ring-white"}`}
        >
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              maxLength: {
                value: 32,
                message: "Password must be less than 32 characters",
              },
              pattern: {
                value: /[0-9]/,
                message: "Password should contain at least one number",
              },
            })}
            className="max-w-full min-w-full text-[0.9rem] bg-transparent text-left focus:outline-none pl-11 placeholder:text-[#A4A4A4] pr-7"
            type={isVisible ? "text" : "password"}
            id="password"
            placeholder="*********"
          />
          <HiOutlineKey className="absolute top-0 bottom-0 h-full text-lg text-[#A4A4A4]" />
          <button
            className="absolute top-0 bottom-0 left-0 text-lg text-[#fff] px-3 active:bg-transparent visited:bg-transparent"
            onClick={(e) => {
              e.preventDefault();
              setisVisible((state) => !state);
            }}
          >
            {isVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
          <span className="absolute top-0 right-0 left-0 blur-md  -bottom-7 bg-gradient-to-tl  via-white/5 from-white/0 to-white/25 -z-10 via-40% "></span>
        </div>
      </div>
      {errors.password && (
        <p className="text-xs text-left italic text-red-300 ml-1">
          {errors.password.message}
        </p>
      )}
    </>
  );
};

export default LoginPasswordField;
