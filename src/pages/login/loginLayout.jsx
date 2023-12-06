import React from "react";
import loginPerson from "../../assets/login/loginPerson.png";
import loginNature from "../../assets/login/loginNature.png";
import BlobsLayout from "../../components/BlobsLayout";

const LoginLayout = ({ children }) => {
  return (
    <>
      <div className="bg-[#151316] h-screen relative flex flex-col overflow-hidden  mix-blend-multiply">
        <div className={`header-bg w-full relative`}>
          <img
            src={loginPerson}
            className="bg-cover w-full z-10 pt-5"
            alt="header img"
          />
          <img
            src={loginNature}
            className="bg-cover w-full absolute top-0 -z-20 from-[#6eb4fb] to-[#58577E] shadow-[#58577E] blur-sm shadow-2xl bg-gradient-to-b"
            alt="header img"
          />
        </div>
        <div
          className="text-white pb-[10vh] flex-1
                 backdrop-blur-3xl rounded-t-[2.5rem] text-3xl z-10 bg-teal-700/5 overflow-hidden no-scrollbar absolute bottom-0 left-0
                  right-0"
        >
          {children}

          <span className="absolute bg-gradient-to-tr blur-xl to-[#1F8A70]/20 via-25% top-5 -bottom-80 -left-5 -right-5 via-[#00425A]/20 from-[#00425A]/20 -z-10"></span>
        </div>
        <BlobsLayout />
      </div>
    </>
  );
};

export default LoginLayout;
