import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const funkyColors = [
  "from-pink-500 to-yellow-400",    
  "from-green-400 to-cyan-400",     
  "from-purple-500 to-pink-500",    
  "from-orange-400 to-red-500"
];

const Tabs = ({ items, activeIndex, onTabClick }) => {
  const tabRefs = useRef([]);

useGSAP(() => {
  tabRefs.current.forEach((tab, index) => {
    if (!tab) return;

    if (index === activeIndex) {
      // Active: keep gradient text
      gsap.to(tab, {
        opacity: 1,
        duration: 0.5,
        color: "transparent", // required for gradient
        borderColor: "#ffffff"
      });
      tab.classList.add("bg-clip-text", "bg-gradient-to-r"); // make sure gradient class exists
    } else {
      // Inactive: make text solid white
      gsap.to(tab, {
        opacity: 0.2, // keep visible
        duration: 0.5,
        color: "#ffffff",
        borderColor: "transparent"
      });
      tab.classList.remove("bg-clip-text", "bg-gradient-to-r");
    }
  });
}, [activeIndex]);

  return (
    <div className="flex flex-wrap border-gray-400 mt-4 md:mt-10 justify-center gap-4 md:gap-15 items-center px-2 md:px-0">
      {items.map((item, index) => {
        const gradient = funkyColors[index % funkyColors.length];
        return (
          <button
            key={item.id}
            ref={el => (tabRefs.current[index] = el)}
            onClick={() => onTabClick(index)}
            className={`px-2 md:px-4 py-2 md:py-4 -mb-px border-b-2 text-lg sm:text-xl md:text-3xl font-medium font-modern-negra whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
