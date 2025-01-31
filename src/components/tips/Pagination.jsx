import React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPaginationPages = () => {
    let pages = [];

    if (totalPages <= 5) {
      // If there are 3 or fewer pages, show them all
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Add the first page
      pages.push(1);

      if (currentPage > 2) {
        pages.push("..."); // Ellipsis before current page
      }

      const middlePages = [];
      // Add the current page
      const middlePage = Math.min(Math.max(currentPage, 2), totalPages - 1);

      if (middlePage > 3) {
        middlePages.push(middlePage - 1);
      }

      middlePages.push(middlePage);

      pages = pages.concat(middlePages);

      if (middlePage < totalPages - 1) {
        pages.push("..."); // Ellipsis after current page
      }

      // Add the last page
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-6">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        className={`px-2 py-2.5 md:mx-1  ${
          currentPage === 1
            ? "cursor-not-allowed text-[#C4CDD5]"
            : "text-black"
        }`}
        disabled={currentPage === 1}
      >
        <FaChevronLeft className="md:text-lg text-xs" />
      </button>

      {/* Page Buttons */}
      <div className="flex gap-3">
        {getPaginationPages().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && onPageChange(page)}
            className={`md:px-3 px-2 font-semibold sm:text-base text-xs ${
              currentPage === page
                ? "px-3 flex justify-center text-center py-1 mx-1  rounded-lg  text-white   bg-[#b677f1] "
                : ""
            }`}
            disabled={page === "..."}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className={ `px-2 py-2.5 md:mx-1  ${
          currentPage === totalPages
            ? "cursor-not-allowed text-[#C4CDD5]"
            : " text-black"
        }`}
        disabled={currentPage === totalPages}
      >
        <FaChevronRight className="md:text-lg text-xs" />
      </button>
    </div>
  );
};

export default Pagination;
