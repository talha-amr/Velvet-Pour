import React, { useState } from 'react'
import sliderLists from '../../sliderList'
import Tabs from './Tabs'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1) 
    useGSAP(() => {
        gsap.fromTo('.slider-anim',
            { xPercent: direction === 1 ? -150 : 150, opacity: 0 },
            { xPercent: 0, opacity: 1, duration: 1.5, ease: 'power4.out' }
        );

        gsap.fromTo('.name-anim',
            { opacity: 0 },
            { opacity: 1, duration: 1.5, ease: 'power2.out' }
        );

        gsap.fromTo('.desc-anim',
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: 'power2.out' }
        );
}, [activeIndex]);
  function handleForwardClick() {
    setDirection(1);
    setActiveIndex((activeIndex + 1) % sliderLists.length);
  }
  function handlePrevClick() {
    setDirection(-1)
    setActiveIndex((activeIndex - 1 + sliderLists.length) % sliderLists.length);
  }

  return (
    <div>
      <section id="menu" className="radial-gradient relative">
        {/* Leaves */}
        <img
          src="/images/slider-left-leaf.png"
          alt="left-leaf"
          className="absolute left-0 bottom-0 w-40 md:w-50 z-0 pointer-events-none"
        />
        <img
          src="/images/slider-right-leaf.png"
          alt="right-leaf"
          className="absolute right-0 top-0 w-40 md:w-50 z-0 pointer-events-none"
        />

        {/* Arrows */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-20">
          <div className="container-content flex justify-between items-center px-4 md:justify-center md:gap-[45rem]">
            {/* Left Arrow */}
            <button
              onClick={handlePrevClick}
              aria-label="Previous slide"
              className="p-1 md:p-2 rounded-full bg-black/40 hover:bg-white/60 shadow"
            >
              <img
                src="/images/right-arrow.png"
                alt="Previous"
                className="w-4 h-4 md:w-6 md:h-6"
              />
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleForwardClick}
              aria-label="Next slide"
              className="p-1 md:p-2 rounded-full bg-black/40 hover:bg-white/60 shadow"
            >
              <img
                src="/images/left-arrow.png"
                alt="Next"
                className="w-4 h-4 md:w-6 md:h-6"
              />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="container-content relative z-10">
          <div className="flex flex-col justify-between items-center">
            <Tabs
              items={sliderLists}
              activeIndex={activeIndex}
              onTabClick={setActiveIndex}
            />

            {/* Image */}
            <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] slider-anim flex justify-center items-center">
              <img
                src={sliderLists[activeIndex].image}
                alt="cocktail-image"
                className="object-contain w-full h-full"
              />
            </div>

            {/* Bottom Text */}
            <div className="flex flex-col md:flex-row justify-between items-center  w-full px-4  gap-6 md:gap-0">
              <div className="space-y-2 text-center md:text-left">
                <p>Recipes for:</p>
                <h1 className="text-4xl md:text-5xl font-modern-negra text-yellow name-anim">
                  {sliderLists[activeIndex].name}
                </h1>
              </div>
              <div className="text-center max-w-sm  md:text-left desc-anim">
                <p className="text-xl  md:text-3xl font-bold ">
                  {sliderLists[activeIndex].title}
                </p>
                <h1 >{sliderLists[activeIndex].description}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Menu
