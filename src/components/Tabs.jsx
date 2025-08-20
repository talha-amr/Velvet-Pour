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

      // Animate opacity
      if (index === activeIndex) {
        gsap.to(tab, { opacity: 1, duration: 0.5 });
        gsap.to(tab, { borderColor: "#ffffff", duration: 0.5 }); // active border
      } else {
        gsap.to(tab, { opacity: 0.5, duration: 0.5 });
        gsap.to(tab, { borderColor: "transparent", duration: 0.5 }); // inactive border
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
