import React from 'react'

const OtherWaysButton = ({children}) => {
  return (
    <>
      <div className='relative mt-5'>
        <div className='text-center text-xs before:content-[""] before:absolute before:h-0.5 before:to-[white] before:from-white/10 before:bg-gradient-to-l before:opacity-30 after:opacity-30 before:right-1 before:bottom-1/3 before:w-1/4  before:contents-[""] after:from-[white] after:to-white/10 after:bg-gradient-to-l after:bottom-1/3  after:absolute after:h-0.5  after:w-1/4 after:left-1 '>
          <span className=''>{children}</span>
        </div>
      </div>
    </>
  )
}

export default OtherWaysButton