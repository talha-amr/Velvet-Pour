import React from "react";

const funkyColors = [
  "from-pink-500 to-yellow-400",    // Tab 1
  "from-green-400 to-cyan-400",     // Tab 2
  "from-purple-500 to-pink-500",    // Tab 3
  "from-orange-400 to-red-500"     // Tab     // Tab 5
];

const Tabs = ({ items, activeIndex, onTabClick }) => {
  return (
    <div className="flex flex-wrap border-gray-400 mt-4 md:mt-10 justify-center gap-4 md:gap-15 items-center px-2 md:px-0">
      {items.map((item, index) => {
        const gradient = funkyColors[index % funkyColors.length]; // loop colors if more tabs
        return (
          <button
            key={item.id}
            onClick={() => onTabClick(index)}
            className={`px-2 md:px-4 py-2 md:py-4 -mb-px border-b-2 text-lg sm:text-xl md:text-3xl font-medium font-modern-negra transition-colors duration-200 whitespace-nowrap
              ${activeIndex === index
                ? `border-white text-transparent bg-clip-text bg-gradient-to-r ${gradient}` // active = funky gradient text
                : `text-gray-400 border-transparent md:border-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r ${gradient}` // inactive = gray but on hover shows gradient
              }`}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
