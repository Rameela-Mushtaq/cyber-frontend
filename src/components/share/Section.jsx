import React from 'react'

const Section = ({children, style}) => {
  return (
    <div className={`max-w-[1900px] w-[90%] flex font-hind justify-center items-center ${style}`}>
      {children}
    </div>
  )
}

export default Section
