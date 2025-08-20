import React, { useState } from 'react'
import sliderLists from '../../sliderList'
import Tabs from './Tabs'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  useGSAP(() => {
    gsap.fromTo(
      '.slider-anim',
      { xPercent: direction === 1 ? -150 : 150, opacity: 0 },
      { xPercent: 0, opacity: 1, duration: 1.5, ease: 'power4.out' }
    )

    gsap.fromTo(
      '.name-anim',
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: 'power2.out' }
    )

    gsap.fromTo(
      '.desc-anim',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'power2.out' }
    )
  }, [activeIndex])

  function handleForwardClick() {
    setDirection(1)
    setActiveIndex((activeIndex + 1) % sliderLists.length)
  }

  function handlePrevClick() {
    setDirection(-1)
    setActiveIndex((activeIndex - 1 + sliderLists.length) % sliderLists.length)
  }

  return (
    <section
      id="menu"
      className="radial-gradient relative min-h-screen flex justify-center items-center"
    >
      {/* Leaves */}
      <img
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        className="absolute left-0 bottom-0 w-24 md:w-40 lg:w-50 z-0 pointer-events-none"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        className="absolute right-0 top-0 w-24 md:w-40 lg:w-50 z-0 pointer-events-none"
      />

      {/* Content */}
      <div className="container-content relative z-10 flex flex-col justify-center items-center gap-4 md:gap-8 w-full h-full py-4 md:py-0">
        {/* Tabs */}
        <div className="w-full flex justify-center">
          <Tabs items={sliderLists} activeIndex={activeIndex} onTabClick={setActiveIndex} />
        </div>

        {/* Image with arrows */}
        <div className="relative w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] flex justify-center items-center">
          <img
            src={sliderLists[activeIndex].image}
            alt="cocktail-image"
            className="object-contain w-full h-full slider-anim"
          />

          {/* Arrows */}
          <div className="absolute inset-0 flex justify-between items-center z-20 px-2">
            <button
              onClick={handlePrevClick}
              aria-label="Previous slide"
              className="p-1.5 md:p-2 rounded-full bg-black/40 hover:bg-white/60 shadow transition-colors duration-200"
            >
              <img src="/images/right-arrow.png" alt="Previous" className="w-4 h-4 md:w-6 md:h-6" />
            </button>
            <button
              onClick={handleForwardClick}
              aria-label="Next slide"
              className="p-1.5 md:p-2 rounded-full bg-black/40 hover:bg-white/60 shadow transition-colors duration-200"
            >
              <img src="/images/left-arrow.png" alt="Next" className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full gap-4 md:gap-6 px-4 pb-2 md:pb-4">
          <div className="space-y-1 md:space-y-2 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-modern-negra text-yellow name-anim">
              {sliderLists[activeIndex].name}
            </h1>
          </div>
          <div className="text-center md:text-left desc-anim max-w-xs sm:max-w-sm">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
              {sliderLists[activeIndex].title}
            </p>
            <h1 className="text-sm sm:text-base md:text-base">
              {sliderLists[activeIndex].description}
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu