import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import upload1 from "../../assets/icons/upload1.png";

const Drawer = ({
    isOpen,
    card,
    onClose,
    onPrevious,
    onNext,
    previousTitle,
    nextTitle,
    isPreviousDisabled,
    isNextDisabled,
    openShare
}) => {
    if (!card) return null;

    return (
        <div
            className={`fixed inset-0 z-40 bg-drwarBg  transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            onClick={onClose} // Close drawer when clicking on the backdrop
        >
            <div
                className={`fixed top-0 bottom-0 right-0 sm:p-5 p-3 overflow-auto bg-white shadow-lg lg:w-[40%] md:w-[50%] sm:w-1/2 w-[70%] z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                onClick={(e) => {
                    e.preventDefault(); // Prevent default behavior
                    e.stopPropagation(); // Stop propagation to the outer container
                    // Your logic here
                }}
            >
                <div className="flex flex-col items-start justify-between h-full gap-8 py-2">
                    <div className="w-full flex flex-col gap-6">
                        {/* Title and Close Icon */}
                        <div className="flex justify-between items-start lg:gap-8 sm:gap-5 gap-2">
                            <div className="lg:text-2xl md:text-lg text-sm font-semibold border-b-4 pb-2 border-orange">
                                {card.title}
                            </div>
                            <div className="flex items-center md:gap-4 gap-2 justify-end cursor-pointer">
                                <img src={upload1} alt="upload" className="md:w-full w-[40%]" onClick={() => openShare(card.id)} />
                                <div
                                    onClick={onClose}
                                    className="border-2 border-[#A3A3A3] cursor-pointer p-0.5 md:p-1.5 rounded-md"
                                >
                                    <RxCross2 className="md:text-xl text-lg" />
                                </div>
                            </div>
                        </div>

                        {/* Image and Description */}
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-[200px] object-cover rounded-md"
                        />
                        <div className="md:text-lg text-xs">{card.description}</div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col w-full">
                        <div className="flex justify-between gap-2">
                            <div
                                className={`flex items-center gap-2 sm:text-base text-xs py-2 cursor-pointer ${isPreviousDisabled
                                    ? "text-gray-500 cursor-not-allowed"
                                    : "text-orange"
                                    }`}
                                onClick={onPrevious}
                                disabled={isPreviousDisabled}
                            >
                                <GoArrowLeft size={20} />
                                Previous
                            </div>
                            <div
                                className={`flex items-center gap-2 py-2 sm:text-base text-xs cursor-pointer ${isNextDisabled
                                    ? "text-gray-500 cursor-not-allowed"
                                    : "text-orange"
                                    }`}
                                onClick={onNext}
                                disabled={isNextDisabled}
                            >
                                Next
                                <GoArrowRight size={20} />
                            </div>
                        </div>
                        <div className="flex justify-between gap-2 pb-3">
                            <div className="flex">
                                {previousTitle && (
                                    <span className="font-semibold truncate sm:text-base text-xs lg:max-w-[250px] sm:max-w-[150px] max-w-[100px]">
                                        {previousTitle}
                                    </span>
                                )}
                            </div>
                            <div className="flex">
                                {nextTitle && (
                                    <span className="font-semibold sm:text-base text-xs lg:max-w-[250px] sm:max-w-[150px] max-w-[100px] truncate">
                                        {nextTitle}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Drawer;
