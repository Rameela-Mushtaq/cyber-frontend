import logo2 from "../../assets/images/logo2.png";
import { Link } from "react-router-dom";
import banner from "../../assets/images/banner.png"
import { FooterSections } from "../../data";


const Footer = () => {
  return (
    <div className="flex flex-col mt-10 justify-between">
      <div className="flex justify-center items-center  px-2 py-4 ">
        <div className="max-w-[1800px] font-hind w-[90%] flex justify-center ">
          <div className="bg-white rounded-2xl z-10 w-[90%] flex items-center gap-8 md:py-20 py-6 lg:px-14 px-4 custom-shadow xl:-mb-[12%]">
            <div className="md:w-[40%] xl:w-[35%] w-full h-full flex justify-center items-center">
              <img src={banner} alt="banner" />
            </div>

            <div className="flex flex-col items-start gap-6 font-hind xl:text-3xl sm:text-2xl text-lg">
              <h1 className="text-line font-medium">
                Take the next step toward a smarter approach to create a positive
                <span className="font-bold"> cybersecurity  </span>
                culture at home and at work.
              </h1>
              <div>
                <button className="bg-orange md:px-10 px-5 py-3  justify-center rounded-lg w-full items-center text-white md:text-lg text-sm font-semibold">
                  Start Learning Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blueMain flex justify-between items-center flex-col xl:pt-64 lg:pt-40 sm:pt-6 ">
        {/* Footer icons */}
        <div className="max-w-[1800px] font-hind gap-6 w-[90%] flex justify-center">
          <div className="flex flex-col sm:px-0 px-6 lg:flex-row gap-8 w-full">
            {/* Logo section */}
            <div className="lg:w-[25%] w-full mx-auto flex flex-col lg:items-start sm:items-center items-start">
              <div className="my-4">
                <img src={logo2} alt="Logo" />
              </div>
              <p className="text-contents md:text-start sm:text-center">
                Your Cybersecurity Self-Defense Platform. A Smarter Approach to
                Keep Yourself Cyber Safe.
              </p>
            </div>

            {/* Footer items section */}
            <div className="flex flex-1 justify-around sm:flex-row flex-col flex-wrap gap-8">
              {FooterSections.map((section, index) => (
                <div key={index} className="xl:text-lg sm:text-base text-sm">
                  <h3 className="font-semibold text-fHead mb-2">{section.title}</h3>

                  <div className="flex flex-col gap-2 text-white">
                    {/* Render Links */}
                    {section.links &&
                      section.links.map((link, idx) => (
                        <Link key={idx} to={link.href}>
                          {link.name}
                        </Link>
                      ))}

                    {/* Render Icons */}
                    {section.icons && (
                      <div className="flex flex-row flex-wrap gap-3">
                        {section.icons.map((icon, idx) => (
                          <Link
                            key={idx}
                            to={icon.href}
                            className="p-2 text-content bg-white w-fit rounded-full"
                          >
                            {icon.icon}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright area */}
        <div className="max-w-[1800px] w-full flex justify-center lg:mt-24 mt-12">
          <div className="w-full xl:text-lg sm:text-base text-sm py-4 border-t border-white border-opacity-35 text-white flex justify-center">
            <div className="w-[90%] flex justify-between gap-4 sm:flex-row flex-col md:items-start items-center">
              <p>Copyright &copy; 2025 Inturity.com. All rights reserved.</p>

              <div className="flex gap-3 sm:w-auto w-full justify-between">
                <Link href="">Terms and Conditions</Link>
                <Link href="">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
