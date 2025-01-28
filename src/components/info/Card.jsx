


const Card = ({ card, onClick, onShareClick }) => {

  return (
    <div className="bg-white gap-5 flex flex-col w-full items-start justify-between rounded-lg">

      {/* image */}
      <div onClick={() => onClick(card)} className="cursor-pointer w-full flex justify-start">
        <img src={card.image} alt="card-img" className="object-cover rounded-xl w-full h-[250px]" />
      </div>

      {/* icons */}
      <div className="flex items-center md:pb-2 md:px-4 justify-between w-full">
        <div className="flex items-center gap-1 sm:px-3 px-2 py-1 rounded-full bg-btnBg">
          <img src={card.downloadIcon} alt="icon" />
          <div className="text-xs">{card.download}</div>
        </div>
        <div className="flex items-center gap-1 sm:px-3 px-2 py-1 rounded-full bg-btnBg">
          <img src={card.likeIcon} alt="icon" className="w-[30%]" />
          <div className="text-xs">{card.likes}</div>
        </div>
        <div className="flex items-center gap-1 sm:px-3 px-2 py-1 rounded-full bg-btnBg">
          <img src={card.viewIcon} alt="icon" className="w-[30%] object-cover" />
          <div className="text-xs">{card.views}</div>
        </div>

        {onShareClick && (
          <div className="flex items-center gap-1 sm:px-3 px-2 py-1 rounded-full bg-btnBg"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onShareClick(card);
            }}
          >
            <img src={card.shareIcon} alt="icon" className="w-[30%] object-cover" />
            <div className="text-xs">{card.shares}</div>
          </div>
        )}
      </div>

      {/* category and heading */}
      <div className="flex flex-col items-start md:gap-3 gap-1 md:p-2 md:px-4 mb-3">
        <div className="text-sm bg-textBg text-btnText px-2 py-1 rounded-lg font-medium">{card.category}</div>
        <div className="xl:text-2xl md:text-xl  font-medium">
          {card.title}
        </div>

      </div>
    </div>
  );
}

export default Card;