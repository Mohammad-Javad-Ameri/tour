import React from "react";

const SignUpSubmit = ({ children, loading }) => {
  return (
    <>
      <button
        type="submit"
        disabled={loading}
        className="px-6 group py-3 min-w-full relative transition-all duration-300 mt-5 text-lg rounded-xl flex justify-center items-center"
      >
        {!loading ? (
          children
        ) : (
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div>
        )}
        <span
          className={`absolute transition-all duration-500 top-0 -z-10 left-0 right-0 bottom-0 rounded-xl bg-gradient-to-r
                      via-30%  
                          ${
                            !loading
                              ? "from-green-700 to-teal-700 via-green-700 group-hover:opacity-0"
                              : "from-gray-700 to-teal-700 via-gray-700"
                          }`}
        ></span>
        <span
          className={`absolute transition-all duration-500 top-0 left-0 right-0 bottom-0 rounded-xl bg-gradient-to-r
                          from-teal-700 to-green-700 via-green-700 via-70% opacity-0 -z-10 
                          ${!loading && "group-hover:opacity-100"}
                          `}
        ></span>
      </button>
    </>
  );
};

export default SignUpSubmit;