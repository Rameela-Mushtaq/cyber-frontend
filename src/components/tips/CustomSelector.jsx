import React, { useState, useEffect } from 'react'; 
import { HiMenuAlt4 } from 'react-icons/hi';

const CustomSelector = ({ categories, onSelect, selectedCategory }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".custom-selector")) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleSelection = (category) => {
        onSelect(category); // Trigger the parent handler
        setMenuOpen(false); // Close the dropdown
    };

    return (
        <div className="custom-selector min-w-[20%] sm:w-fit w-full relative">
            {/* Button */}
            <button
                className="w-full flex justify-between items-center sm:text-base text-sm bg-orange text-white px-4 md:px-6 py-4 rounded-lg gap-8"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-haspopup="listbox"
                aria-expanded={menuOpen}
            >
                {selectedCategory || "Select a Category"}
                <span className="mt-1">
                    <HiMenuAlt4 className="text-xl" />
                </span>
            </button>

            {/* Dropdown Menu */}
            {menuOpen && (
                <div
                    className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-full max-h-60 overflow-auto z-40"
                    role="listbox"
                >
                    <ul className="py-2">
                        {categories.map((item) => (
                            <li
                                key={item}
                                role="option"
                                aria-selected={selectedCategory === item}
                                className={`px-4 py-2 cursor-pointer ${
                                    selectedCategory === item
                                        ? "bg-orange text-white"
                                        : "hover:bg-orange hover:text-white text-black"
                                }`}
                                onClick={() => handleSelection(item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CustomSelector;
