import React from 'react'

import info from "../../assets/images/info.png";

const Hero = () => {
  return (
    <div className="bg-infoBg md:py-16 py-8 flex justify-center ">
      <div className="flex flex-col md:flex-row items-center max-w-[1900px] font-hind gap-2 w-[90%]">
        {/* Left side */}
        <div className="text-center md:text-left md:w-[60%] w-full flex flex-col md:gap-4 gap-2 md:items-start items-center">
          <div className='flex flex-col gap-1'>
          <div className="lg:text-2xl md:text-xl text-lg  font-semibold text-content">
          Infographics
          </div>
          <div className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold xl:leading-[66px]">
          Visualize Your <br />
            <span className="font-bold xl:text-6xl lg:text-5xl md:text-4xl text-3xl"> Cybersecurity </span>
            Knowledge
          </div>
          </div>
          <p className="lg:text-lg md:text-base sm:text-sm text-xs md:w-[90%]">
          Welcome to our Cybersecurity Infographics page, where complex cybersecurity concepts are simplified through engaging and informative visuals. Our infographics are designed to help you quickly understand key topics and best practices to enhance your cybersecurity awareness.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex-1 md:flex justify-center hidden w-full h-full">
          <img src={info} alt="hero" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

