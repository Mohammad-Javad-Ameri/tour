import React from 'react';
import { BsPerson } from 'react-icons/bs';

const UserNameField = ({ register, errors }) => {
    console.log(errors);
  return (
    <>
      <div className=" space-y-1 py-1 text-right">
        <label htmlFor="usename" className="text-[0.82rem] mx-2">
          نام کاربری
        </label>
        <div
          className={`relative flex justify-end rounded-2xl text-sm pr-3 py-5 overflow-hidden ring-1  ring-opacity-30
          ${errors.userName ? 'ring-red-500' : 'ring-white'}`}
        >
          <input
            {...register("userName", {
              required: "Full name is required",
              maxLength: {
                value: 100,
                message: "Name must be less than 100 characters"
              },
              pattern: {
                value: /^[A-Za-z0-9]+$/,
                message: "Name can only contain letters and numbers"
              }
            })}
            className="max-w-full  text-[0.9rem] min-w-full bg-transparent focus:outline-none pl-11 placeholder:text-[#A4A4A4] pr-7"
            type="text"
            id="usename"
            placeholder="@yourname"
          />
          <BsPerson className="absolute top-0 bottom-0 h-full text-lg text-[#A4A4A4]" />
          <span className="absolute top-0 right-0 left-0 blur-md  -bottom-7 bg-gradient-to-tl  via-white/5 from-white/0 to-white/25 -z-10 via-40% "></span>
        </div>
      </div>
      {errors.userName && (
        <p className="text-xs text-left italic text-red-300 ml-1">
          {errors.userName.message}
        </p>
      )}
    </>
  );
};

export default UserNameField;