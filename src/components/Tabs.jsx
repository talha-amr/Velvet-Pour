import React from "react";

const Tabs = ({ items, activeIndex, onTabClick }) => {
  return (
    <div className="flex  border-gray-400 mt-10 justify-center gap-15 items-center">
      {items.map((item, index) => (
        <button
          key={item.id}
          onClick={() => onTabClick(index)}
          className={`px-4 py-4 -mb-px  border-b-2 text-3xl font-medium font-modern-negra transition-colors duration-200 ${
            activeIndex === index
              ? "text-white  border-white"
              : "text-gray-400"
          }`}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
