import { RxCross2 } from "react-icons/rx";
import upload1 from '../../assets/icons/upload1.png'
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const Popup = ({ card, relatedCards, onClose, onCardClick, onPrevious, onNext, onShareClick, }) => (
    <div className="fixed inset-0 top-0 left-0 w-full h-full z-40 bg-[#00000094] bg-opacity-50 flex justify-center items-center">
        <div
            className="fixed w-[90%] max-h-[95%]  flex flex-col gap-4 overflow-auto justify-between bg-white  rounded-lg  shadow-lg font-hind" >
            <div className="w-full h-full flex flex-col justify-center bg-white px-4 py-3">
                {/* heading and icons */}
                <div className="flex justify-between w-full items-center md:px-4">
                    <div className="font-medium mt-2 lg:text-2xl text-lg">{card.title}</div>
                    <div className='flex items-center md:gap-4 gap-2 justify-end'>
                        <img src={upload1} alt="upload" className='md:w-full w-[40%] cursor-pointer' 
                        onClick={() => {  
                            onShareClick(card); 
                        }} 
                        />
                        <div onClick={onClose} className='border-2 border-[#A3A3A3] cursor-pointer p-0.5 md:p-1.5 rounded-md'>
                            <RxCross2 className='md:text-xl text-lg' />
                        </div>
                    </div>
                </div>

                {/* image and description */}
                <div className="w-full h-full bg-white sm:p-5">
                    <div className="flex flex-col gap-4 lg:flex-row h-full overflow-auto lg:max-h-[70vh] pt-3">
                        {/* left side */}
                        <div className="md:w-[60%] w-full flex h-full justify-center items-center">
                            <img src={card.image} alt="card" className="object-contain w-full h-full" />
                        </div>

                        {/* right side */}
                        <div className="md:flex-1 w-full flex flex-col md:gap-4">
                            <div className="flex flex-col gap-2 ">
                                <div className="text-sm bg-textBg text-btnText px-2 py-1 rounded-lg font-medium w-fit">{card.category}</div>
                                <div className="md:text-2xl text-sm font-medium">
                                    {card.title}
                                </div>
                            </div>

                            <div className="flex flex-col gap-5 py-3">
                                <div className="flex flex-col gap-3">
                                    <div className="bg-[#AA41BD] w-fit rounded-md text-white px-4 py-2 md:text-base text-xs">
                                        Love this item?
                                    </div>
                                    <div className="xl:text-3xl sm:text-2xl text-base font-medium">Download for free</div>
                                </div>
                                <div className="flex flex-col gap-2 font-medium md:text-xl text-xs">
                                    <div>Enter Your email*</div>
                                    <input type="email" placeholder="Email Address" className="py-2 px-3 w-[90%] border rounded-lg text-sm" />
                                </div>

                                <div className="flex flex-col gap-3 md:pt-2">
                                    <div className="bg-orange w-fit rounded-md text-white px-4 py-2 md:text-base text-xs">
                                        Send Me A Copy!
                                    </div>
                                    <div className="xl:text-3xl sm:text-2xl text-base font-medium">Get Unlimited Downloads</div>
                                </div>
                            </div>

                            <div className="font-medium md:text-xl text-xs md:pt-2">Existing User? <span className="text-[#E099ED]">Sign In</span></div>
                        </div>
                    </div>

                    {/* related cards */}
                    <div className="pt-5 xl:pt-8 flex flex-col md:gap-6 gap-2">
                        <div className="flex items-center flex-wrap w-full justify-between">
                            <div className="xl:text-3xl sm:text-2xl text-lg font-medium">You might also like</div>
                            <div className="font-medium text-end md:text-base text-xs">View All</div>
                        </div>

                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4">
                            {relatedCards.map((related) => (
                                <div
                                    key={related.id}
                                    className="flex flex-col gap-3 cursor-pointer"
                                    onClick={() => onCardClick(related)}
                                >
                                    <img
                                        src={related.image}
                                        alt={related.title}
                                        className="xl:h-[300px] lg:h-[250px] md:h-[200px] h-[220px] object-cover rounded-2xl w-full"
                                    />
                                    {/* icons */}
                                    <div className="flex items-center md:pb-2 md:px-4 justify-between w-full">
                                        <div className="flex items-center gap-1 sm:px-3 px-2 py-1 rounded-full bg-btnBg">
                                            <img src={related.downloadIcon} alt="icon" />
                                            <div className="text-xs">{related.download}</div>
                                        </div>
                                        <div className="flex items-center gap-1 sm:px-3 px-2 py-1 rounded-full bg-btnBg">
                                            <img src={related.likeIcon} alt="icon" className="w-[30%]" />
                                            <div className="text-xs">{related.likes}</div>
                                        </div>
                                        <div className="flex items-center gap-1 sm:px-3 px-2 py-1 rounded-full bg-btnBg">
                                            <img src={related.viewIcon} alt="icon" className="w-[30%] object-cover" />
                                            <div className="text-xs">{related.views}</div>
                                        </div>
                                        <div className="flex items-center gap-1 sm:px-3 px-2 py-1 rounded-full bg-btnBg"

                                        >
                                            <img src={related.shareIcon} alt="icon" className="w-[30%] object-cover" />
                                            <div className="text-xs">{related.shares}</div>
                                        </div>
                                    </div>

                                    {/* category and heading */}
                                    <div className="flex flex-col justify-start md:gap-3 gap-1 px-2 md:px-4 mb-3">
                                        <div className="text-sm bg-textBg text-btnText px-2 py-1 rounded-lg w-fit font-medium">{related.category}</div>
                                        <div className="font-medium lg:text-2xl text-lg">
                                            {related.title}
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div onClick={onPrevious}
            className="bg-white cursor-pointer p-3 z-50 rounded-full fixed left-2 top-1/2 -translate-y-1/2">
            <FaArrowLeftLong className="text-xl text-black" />
        </div>

        <div onClick={onNext}
            className="bg-white cursor-pointer p-3 z-50 rounded-full fixed right-2 top-1/2 -translate-y-1/2">
            <FaArrowRightLong className="text-xl text-black" />
        </div>
    </div>
);

export default Popup;


