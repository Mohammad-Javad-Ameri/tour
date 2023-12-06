import React from "react";

const BlobsLayout = () => {
  return (
    <>
      <span className="fixed ounded-full bg-gradient-radial animate-pulse  from-[#00F79E]/40 to-[#00425A]/50 bg-opacity-50 blur-lg to-70% bottom-16 left-0 bg-gradient h-96 w-96 -translate-x-1/2 translate-y-1/2"></span>
      <span className="fixed rounded-full bg-gradient-radial animate-pulse  from-[#FDF0D5]/20 from-20% to-[#360060]/10 blur-lg to-20% bottom-16 right-0 bg-gradient h-96 w-96 translate-x-1/2 translate-y-56"></span>
      <span className="fixed rounded-full bg-gradient-radial animate-pulse  from-[#FDF0D5] -z-40 to-[#360060]/20 blur-lg to-20% bottom-16 right-0 bg-gradient h-96 w-96 translate-x-64 -translate-y-[35vh]"></span>
    </>
  );
};

export default BlobsLayout;
