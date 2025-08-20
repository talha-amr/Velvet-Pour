import { useGSAP } from '@gsap/react'
import React from 'react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

const Art = () => {
    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#art',
                start: '10% top',
                between: 'bottom center',
                scrub: 1.5,
                pin: true,
                // markers: true
            }
        });
        tl.to('.will-fade', {
            opacity: 0
        })
            .to('.masked-img', {
                scale: 1.3,
                maskPosition: 'center',
                maskSize: '400%',
                duration: 1,
                ease: 'power1.inOut'
            })
        tl.to('.will-show', {
            opacity: 1
        })
    }, [])

    return (
       <section id='art' className='radial-gradient'>
  <div className='container-content'>
    <div className="flex flex-col justify-between items-center w-full">
      <h1 className='artText will-fade text-center mb-8 md:mb-0'>The Art</h1>
      <div className="cocktail-wrapper hidden md:block">
        <div className="cocktail-img">
          <img
            src="/images/under-img.jpg"
            alt="under-image"
            className="masked-img"
          />
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[30%] w-full px-6">
<div className="max-w-7xl mx-auto flex flex-col items-center md:flex-row md:justify-between md:items-start gap-12 will-fade">
  {/* Left Column */}
  <ul className="space-y-2 text-center md:text-left w-full md:w-auto">
    <li className="flex items-center gap-2">
      <img src="/images/check.png" className="w-5 h-5 shrink-0" alt="check" />
      <span className="text-lg lg:text-xl">Handpicked ingredients</span>
    </li>
    <li className="flex items-center gap-2">
      <img src="/images/check.png" className="w-5 h-5 shrink-0" alt="check" />
      <span className="text-lg lg:text-xl">Signature techniques</span>
    </li>
    <li className="flex items-center gap-2">
      <img src="/images/check.png" className="w-5 h-5 shrink-0" alt="check" />
      <span className="text-lg lg:text-xl">Bartending artistry in action</span>
    </li>
    <li className="flex items-center gap-2">
      <img src="/images/check.png" className="w-5 h-5 shrink-0" alt="check" />
      <span className="text-lg lg:text-xl">Freshly muddled flavors</span>
    </li>
  </ul>

  {/* Right Column */}
  <ul className="space-y-2 text-center md:text-left w-full md:w-auto mt-6 md:mt-0">
    <li className="flex items-center gap-2">
      <img src="/images/check.png" className="w-5 h-5 shrink-0" alt="check" />
      <span className="text-lg lg:text-xl">Perfectly balanced blends</span>
    </li>
    <li className="flex items-center gap-2">
      <img src="/images/check.png" className="w-5 h-5 shrink-0" alt="check" />
      <span className="text-lg lg:text-xl">Garnished to perfection</span>
    </li>
    <li className="flex items-center gap-2">
      <img src="/images/check.png" className="w-5 h-5 shrink-0" alt="check" />
      <span className="text-lg lg:text-xl">Ice-cold every time</span>
    </li>
    <li className="flex items-center gap-2">
      <img src="/images/check.png" className="w-5 h-5 shrink-0" alt="check" />
      <span className="text-lg lg:text-xl">Expertly shaken & stirred</span>
    </li>
  </ul>
</div>

      </div>

      <div className="absolute bottom-0 inset-x-0 text-center">
        <div className="font-modern-negra will-fade md:block hidden text-3xl md:text-5xl">
          Sip-Worthy Perfection
        </div>
        <h2 className="text-3xl md:text-5xl will-show font-modern-negra text-center opacity-0">
          Made with Craft<span className="font-sans font-bold">,</span> Poured With Passion
        </h2>
        <p className="will-show text-lg md:text-xl mt-2 opacity-0 px-4 md:px-0">
          This isn't just a drink. It's a carefully crafted moment made just for you.
        </p>
      </div>
    </div>
  </div>
</section>

    )
}

export default Art