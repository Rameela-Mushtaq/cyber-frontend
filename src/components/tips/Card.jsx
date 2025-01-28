import React from 'react'

const Card = ({ item, openDrawer, openShare, truncateDescription }) => {
    return (
        <div
            key={item.id}
            className='bg-white rounded-lg group hover:shadow-lg flex flex-col gap-4'
        >
            <div
                className='cursor-pointer transition duration-200'
                onClick={() => 
                    openDrawer(item.id)
                }
            >
                <img
                    src={item.image}
                    alt='card'
                    className='object-cover w-full h-[250px] rounded-lg'
                />
            </div>
            <div className='px-3 h-full flex-1 justify-between flex flex-col md:gap-5 gap-3'>
                <div className='flex flex-col gap-2'>
                    <div
                        onClick={() => openDrawer(item.id)}
                        className='md:text-2xl text-xl font-semibold group-hover:text-orange cursor-pointer'
                    >
                        {item.title}
                    </div>
                    <div className='md:text-lg text-sm'>{truncateDescription(item.description)}</div>
                </div>
                <div className='border-t border-fHead py-4 flex justify-between'>
                    <div className='flex items-center gap-2'>
                        <img src={item.likeIcon} alt='' />
                        <div className='text-xs sm:text-base'>{item.likes}</div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={item.viewIcon} alt='' />
                        <div className='text-xs sm:text-base'>{item.views}</div>
                    </div>
                    <div
                        className='flex items-center gap-2 cursor-pointer'
                        onClick={() => openShare(item.id)}
                    >
                        <img src={item.shareIcon} alt='' />
                        <div className='text-xs sm:text-base'>{item.shares}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
