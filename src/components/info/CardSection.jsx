import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { InfoData, ShareData } from '../../data';
import Popup from './Popup';
import Card from './Card';
import Share from './Share';
import Section from '../share/Section';

const CardSection = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);  // Track popup visibility
  const [currentCardIndex, setCurrentCardIndex] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cardId = params.get('cardId');

    if (cardId) {
      const card = InfoData.find((card) => card.id == cardId);
      if (card) {
        setSelectedCard(card);
        setIsPopupOpen(true);
      }
    } else {
      setSelectedCard(null);
      setIsPopupOpen(false);
    }
  }, [location.search]);

  const handlePopupClick = (card) => {
    const index = InfoData.findIndex((c) => c.id === card.id);
    if (selectedCard !== card || !isPopupOpen) {
      setSelectedCard(card);
      setIsPopupOpen(true);
      setCurrentCardIndex(index);
      navigate(`${location.pathname}?cardId=${card.id}`, { replace: true });
    }
  };

  const handleShareClick = (card) => {
    setSelectedCard(card);
    setIsShareOpen(true);
  };

  const handleClosePopup = () => {
    if (isPopupOpen) {
      setIsPopupOpen(false);
      const params = new URLSearchParams(location.search);
      params.delete('cardId');
      navigate(`${location.pathname}?${params.toString()}`, { replace: true });
    }
  };

  const handleNextCard = () => {
    if (currentCardIndex !== null) {
      const nextIndex = (currentCardIndex + 1) % InfoData.length; // Loop to the first card
      const nextCard = InfoData[nextIndex];
      setSelectedCard(nextCard);
      setCurrentCardIndex(nextIndex);
      navigate(`${location.pathname}?cardId=${nextCard.id}`, { replace: true }); // Update URL
    }
  };

  const handlePreviousCard = () => {
    if (currentCardIndex !== null) {
      const prevIndex = (currentCardIndex - 1 + InfoData.length) % InfoData.length; // Loop to the last card
      const prevCard = InfoData[prevIndex];
      setSelectedCard(prevCard);
      setCurrentCardIndex(prevIndex);
      navigate(`${location.pathname}?cardId=${prevCard.id}`, { replace: true }); // Update URL
    }
  };

  const closeShare = () => setIsShareOpen(false);

  const relatedCards = selectedCard
    ? InfoData.filter(
      (card) => card.category === selectedCard.category && card.id !== selectedCard.id
    )
    : [];

  return (
    <div className='flex justify-center sm:py-20 py-6'>
      {/* <div className='max-w-[1900px] w-[90%] flex flex-col font-hind justify-center items-center gap-8 sm:px-0 px-2'> */}
        <Section style={'flex  flex-col gap-8 sm:px-0 px-2'}>
        {/* text section */}
        <div className='flex flex-col items-center gap-3.5'>
          <div className='text-blue text-center font-semibold lg:text-4xl md:text-3xl text-xl'>
            Cybersecurity Awareness Posters
          </div>
          <div className='md:w-[83%] w-full text-center sm:text-lg text-sm'>
            These posters will help everyone to be aware of cyber risks and threats. As 95% of all data breaches occur due to human error, the human element is often seen as the weakest link in the chain. By making only a few changes to your technological habits could protect your organization and the ones you care about the most. Please post and share.
          </div>
        </div>

        {/* card section */}
        <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4 w-full md:py-5">
          {InfoData.map((card) => (
            <Card key={card.id} card={card} onClick={handlePopupClick} onShareClick={handleShareClick} />
          ))}

          {isShareOpen && (
            <Share
              isOpen={isShareOpen}
              onClose={closeShare}
              shareData={ShareData}
              url={`${window.location.origin}${location.pathname}?cardId=${selectedCard?.id}`}
            />
          )}

          {isPopupOpen && selectedCard && (
            <Popup
              card={selectedCard}
              relatedCards={relatedCards}
              onClose={handleClosePopup}
              onCardClick={handlePopupClick}
              onPrevious={handlePreviousCard}
              onNext={handleNextCard}
              onShareClick={handleShareClick}
            />
          )}
        </div>
        </Section>
      {/* </div> */}
    </div>
  );
};

export default CardSection;
