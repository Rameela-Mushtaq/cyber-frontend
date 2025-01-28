import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import search from '../../assets/icons/search.png';
import { CardData, ShareData } from '../../data';
import Pagination from './Pagination';
import Drawer from './Drawer';
import Share from './Share';
import CustomSelector from './CustomSelector';
import Card from './Card';


const CardSection = () => {
    const [activeCardId, setActiveCardId] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [shareOpen, setShareOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [topCategories, setTopCategories] = useState([]);
    const [customSelectorCategory, setCustomSelectorCategory] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(location.search);
    const cardId = params.get('cardId');


    useEffect(() => {

        if (cardId) {
            const card = CardData.find((card) => card.id == cardId);
            if (card) {

                setActiveCardId(card.id);
                setDrawerOpen(true);

            }
        } 
        // else {
        //     setActiveCardId(null);
        //     setDrawerOpen(false);
        // }
    }, [location.search, cardId]);



    const openDrawer = (id) => {
        if (activeCardId !== id || !drawerOpen) {
          setActiveCardId(id); // Update state first
          setDrawerOpen(true); // Then open the drawer
          // Update URL with cardId
          navigate(`${location.pathname}?cardId=${id}`, { replace: true });
        }
      };

    const openShare = (id) => {
        setActiveCardId(id);
        setShareOpen(true);
    };

    const closeDrawer = () => {
        if (drawerOpen) {
            setDrawerOpen(false);
            const params = new URLSearchParams(location.search);
            params.delete('cardId');
            navigate(`${location.pathname}?${params.toString()}`, { replace: true });
        }
    };

    const closeShare = () => setShareOpen(false);


    const truncateDescription = (text) => {
        const maxChars = 80;
        return text.length > maxChars ? text.slice(0, maxChars) + '...' : text;
    };

    const activeCard = CardData.find((card) => card.id === activeCardId);

    const itemsPerPage = 9;

    const filteredCards = CardData.filter(
        (card) => card.category === selectedCategory
    );

    const totalPages = Math.ceil(filteredCards.length / itemsPerPage);
    const currentCards = filteredCards.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    useEffect(() => {
        const categoryCount = CardData.reduce((acc, card) => {
            acc[card.category] = (acc[card.category] || 0) + 1;
            return acc;
        }, {});

        const sortedCategories = Object.entries(categoryCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([category]) => category);
        setTopCategories(sortedCategories);

        if (sortedCategories.length > 0) {
            setSelectedCategory(sortedCategories[0]);
            setCustomSelectorCategory(sortedCategories[0]);
        }
    }, []);

    useEffect(() => {
        // Log the selected category to the console every time it changes
        console.log('Selected Category:', customSelectorCategory);
    }, [customSelectorCategory]);

    const handleCategorySelect = (category) => {
        setCustomSelectorCategory(category);
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const handleTopCategorySelect = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const onPrevious = () => {
        const filteredIndex = filteredCards.findIndex((card) => card.id === activeCardId);
        if (filteredIndex > 0) {
            const prevCard = filteredCards[filteredIndex - 1];
            setActiveCardId(prevCard.id); // Update state
            navigate(`${location.pathname}?cardId=${prevCard.id}`, { replace: true }); // Update URL
        }
    };

    const onNext = () => {
        const filteredIndex = filteredCards.findIndex((card) => card.id === activeCardId);
        if (filteredIndex < filteredCards.length - 1) {
            const nextCard = filteredCards[filteredIndex + 1];
            setActiveCardId(nextCard.id); // Update state
            navigate(`${location.pathname}?cardId=${nextCard.id}`, { replace: true }); // Update URL
        }
    };

    return (
        <div className='flex justify-center sm:py-20 py-6'>
            <div className='max-w-[1900px] w-[90%] flex flex-col justify-center font-hind items-center gap-8 sm:px-0 px-2'>
                {/* Text Section */}
                <div className='flex flex-col items-center gap-3.5'>
                    <div className='text-blue text-center font-semibold lg:text-4xl md:text-3xl text-xl'>
                        Welcome to Cybersecurity Tips & Tricks
                    </div>
                    <div className='sm:w-[83%] w-full text-center sm:text-lg text-sm'>
                        Welcome to our Cybersecurity Tips & Tricks page! Here, you’ll find practical advice and expert tips to help you protect your digital life.
                    </div>
                </div>

                {/* Search Section */}
                <div className='flex justify-between sm:flex-row flex-col w-full gap-6'>
                    <div className='w-full flex-1 flex items-center border-b border-border py-4 gap-3'>
                        <div className='flex-shrink-0'>
                            <img src={search} alt='' />
                        </div>
                        <input type='text' placeholder='Search Here' className='w-full outline-none text-blue placeholder:text-blue font-medium' />
                    </div>

                    <CustomSelector
                        categories={[...new Set(CardData.map((card) => card.category))]}
                        onSelect={handleCategorySelect}
                        selectedCategory={customSelectorCategory}
                    />
                </div>

                {/* Category Section */}
                <div className='w-full flex flex-col md:gap-6 gap-4'>
                    <div className='text-contents md:text-xl text-lg font-normal'>Top Categories</div>
                    <div className='flex w-full flex-wrap sm:gap-4 gap-2'>
                        {topCategories.map((item, index) => (
                            <div
                                key={index}
                                className={`sm:p-4 p-2 sm:w-[190px] w-[48%] truncate flex justify-center hover:bg-catBg hover:text-blue hover:border-transparent border rounded-lg cursor-pointer sm:text-sm text-xs ${selectedCategory === item ? 'bg-catBg text-blue' : ''}`}
                                onClick={() => handleTopCategorySelect(item)}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Card Section */}
                <div className='w-full md:py-10 py-2'>
                    <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-6'>
                        {currentCards.map((item) => (
                            <Card
                                key={item.id}
                                item={item}
                                openDrawer={openDrawer}
                                openShare={openShare}
                                truncateDescription={truncateDescription}
                            />
                        ))}
                    </div>

                    {/* Drawer */}
                    <Drawer
                        isOpen={drawerOpen}
                        card={activeCard}
                        onClose={closeDrawer}
                        openShare={openShare}
                        onPrevious={onPrevious}
                        onNext={onNext}
                        previousTitle={
                            filteredCards[filteredCards.findIndex((card) => card.id === activeCardId) - 1]?.title
                        }
                        nextTitle={
                            filteredCards[filteredCards.findIndex((card) => card.id === activeCardId) + 1]?.title
                        }
                        isPreviousDisabled={filteredCards.findIndex((card) => card.id === activeCardId) === 0}
                        isNextDisabled={
                            filteredCards.findIndex((card) => card.id === activeCardId) === filteredCards.length - 1
                        }
                    />

                    {/* Share */}
                    <Share
                        isOpen={shareOpen}
                        onClose={closeShare}
                        shareData={ShareData}
                        url={`${window.location.origin}${location.pathname}?cardId=${activeCardId}`}
                    />
                </div>

                {/* Pagination */}
                {filteredCards.length > itemsPerPage && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                )}
            </div>
        </div>
    );
};

export default CardSection;
