import React from "react";

const Tabs = ({ items, activeIndex, onTabClick }) => {
  return (
    <div className="flex flex-wrap border-gray-400 mt-4 md:mt-10 justify-center gap-4 md:gap-15 items-center px-2 md:px-0">
      {items.map((item, index) => (
        <button
          key={item.id}
          onClick={() => onTabClick(index)}
          className={`px-2 md:px-4 py-2 md:py-4 -mb-px border-b-2 text-lg sm:text-xl md:text-3xl font-medium font-modern-negra transition-colors duration-200 whitespace-nowrap ${
            activeIndex === index
              ? "text-white border-white"
              : "text-gray-400 border-transparent md:border-gray-400"
          }`}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Tabs;