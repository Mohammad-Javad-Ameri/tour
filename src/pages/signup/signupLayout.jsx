

import React from 'react'
import headerbg from '../../assets/signup/headerBg.png'
// import BlobsLayout from '../../component/blobsLayout'


const SignupLayout = ({ children }) => {
    return (
        <>
            <div className='bg-[#151316]  relative flex flex-col overflow-hidden mix-blend-multiply h-screen'>
                <div className='' >
                    <img src={headerbg} className='bg-cover w-full mx-auto' alt="header image" />
                </div>
                <span className='absolute rounded-full h-20 left-5 right-5 bg-[#D9D9D9] bg-opacity-80 -z-30 blur-3xl top-[41vw] '></span>
                <div className='text-white pb-[5vh] flex-1
                 backdrop-blur-3xl rounded-t-[2.5rem] text-3xl z-10 bg-teal-700/5 overflow-hidden no-scrollbar absolute bottom-0 left-0
                  right-0'>

                    {children}

                    <span className="absolute bg-gradient-to-tr blur-xl to-[#1F8A70]/20 via-25% top-5 -bottom-80 -left-5 -right-5 via-[#00425A]/20 from-[#00425A]/20 -z-10"></span>
                </div>
                {/* <BlobsLayout/> */}
            </div>
        </>
    )
}

export default SignupLayout