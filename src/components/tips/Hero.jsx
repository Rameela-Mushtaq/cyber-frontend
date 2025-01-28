import React from 'react'

import tips from "../../assets/images/tips.png";

const Hero = () => {
  return (
    <div className="bg-tipBg pt-8 md:pt-16 lg:pb-0 md:pb-20 pb-8 flex justify-center ">
      <div className="flex flex-col md:flex-row items-center max-w-[1900px] font-hind gap-2 w-[90%]">
        {/* Left side */}
        <div className="text-center md:text-left md:w-[60%] w-full flex flex-col md:gap-4 gap-2 md:items-start items-center">
          <div className='flex flex-col gap-1'>
            <div className="lg:text-2xl md:text-xl text-lg  font-semibold text-content">
              Tips and Tricks
            </div>
            <div className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold xl:leading-[66px]">
              Enhance Your Cybersecurity  <br />
              with Expert
              <span className="font-bold xl:text-6xl lg:text-5xl md:text-4xl text-3xl"> Tips and Tricks</span>
            </div>
          </div>
          <p className="lg:text-lg md:text-base sm:text-sm text-xs md:w-[90%]">
            Welcome to our Tips & Tricks page, your go-to resource for practical advice and strategies to keep your digital life secure. From creating strong passwords to recognizing phishing scams, our expert tips are designed to help you stay safe online.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex-1 md:flex justify-center hidden w-full h-full">
          <img src={tips} alt="hero" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

