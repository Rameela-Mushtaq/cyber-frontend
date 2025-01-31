import React, { useState } from 'react'
import logo from "../../assets/images/logo.png"
import { SidebarLinks } from '../../data'
import { useNavigate } from 'react-router-dom';
import { ReactComponent as LogoutIcon } from '../../svgs/logout.svg';


const MobileNav = () => {
    const [activeItem, setActiveItem] = useState(1);
    const navigate = useNavigate();

    const handleItemClick = (id, href) => {
        setActiveItem(id);
        navigate(href);
    };

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className='fixed max-h-screen overflow-auto custom-scrollbar  inset-0 z-50 transition-transform transform translate-x-0 md:static md:translate-x-0 xl:w-[16%] lg:w-[23%] md:w-[26%] w-[70%]'>
            <div className='w-full h-full flex-grow pb-1 md:z-40 z-50 flex justify-between items-center flex-col pt-4 bg-white border-r border-bordered'>
                {/* dashboard items */}
                <div className='flex flex-col items-start gap-5 w-[85%]'>
                    {/* logo */}
                    <div className='flex items-center gap-3 justify-between w-full'>
                        <img src={logo} alt="logo" className='w-[170px] h-[49px]' />
                    </div>

                    <div className='flex flex-col gap-1 text-sm font-inter w-full'>
                        {SidebarLinks.map((link) =>
                        (
                            <div key={link.id}

                                onClick={() => {
                                    handleItemClick(link.id, link.href);
                                }}
                                className={`relative px-3 py-3 w-[90%] flex items-center gap-3 rounded-md  ${activeItem === link.id
                                    ? " font-semibold bg-purpleBg text-white"
                                    : "text-black"
                                    }`}

                            >
                                {activeItem === link.id && (
                                    <div className="absolute -left-[10.3%] top-0 h-full w-[4px] bg-purpleBg rounded-r-md"></div>
                                )}
                                <div>
                                    <link.icon className={` ${activeItem === link.id ? ' stroke-white fill-white' : 'text-contents'}`} />
                                </div>
                                <div className="font-normal">{link.name}</div>

                            </div>
                        )
                        )}
                    </div>
                </div>

                {/* logout */}
                <div className='pt-10 h-[15%] px-3 w-full flex justify-center items-start border-t border-bordered'>
                    <div className='flex items-center w-[85%] justify-start gap-4 '>
                        <LogoutIcon />
                        <div>Logout</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileNav
