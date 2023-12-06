import React from "react";
import { BsPerson } from "react-icons/bs";

const NameOrEmailField = ({ register, errors }) => {
  return (
    <>
      <div className=" space-y-1 py-1">
        <label htmlFor="usename" className="text-[0.82rem]">
          نام کاربری یا ایمیل
        </label>
        <div
          className={`relative rounded-2xl text-sm pr-3 py-5 overflow-hidden ring-1  ring-opacity-30
          ${errors.emailOrUsername ? "ring-red-500" : "ring-white"}`}
        >
          <input
            {...register("emailOrUsername", {
              required: "Full name is required",
              maxLength: { value: 100, message: "Full name is too long" },
            })}
            className="max-w-full min-w-full text-[0.9rem] bg-transparent text-left focus:outline-none pl-11 placeholder:text-[#A4A4A4] pr-7"
            type="text"
            id="usename"
            placeholder="yourname@"
          />
          <BsPerson className="absolute top-0 bottom-0 h-full text-lg text-[#A4A4A4]" />
          <span className="absolute top-0 right-0 left-0 blur-md  -bottom-7 bg-gradient-to-tl  via-white/5 from-white/0 to-white/25 -z-10 via-40% "></span>
        </div>
      </div>
      {errors.emailOrUsername && (
        <p className="text-xs text-left italic text-red-300 ml-1">
          {errors.emailOrUsername.message}
        </p>
      )}
    </>
  );
};

export default NameOrEmailField;
