import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Contact = () => {
  useGSAP(() => {
    let leaf = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: 'top 40%',
        end: 'bottom 80%%',
        scrub: true,
        // markers: true
      }
    });
    leaf.to('.left-anim1', {
      // move right
      y: 100, // move up
      ease: "none"
    }, 0);

    // Right element: starts at top-right, moves towards center
    leaf.to('.right-anim1', {
      y: -100,  // move down
      ease: "none"
    }, 0);
  }, [])
  return (
    <section className="noisy relative min-h-screen flex justify-center items-center overflow-hidden" id="contact">
      {/* Background images */}
      <img src="/images/footer-left-leaf.png" alt="footer leaf" className='absolute left-0 bottom-0 w-24 md:w-50 left-anim1 lg:w-60 z-0 pointer-events-none' />
      <img src="/images/footer-right-leaf.png" alt="footer leaf" className='absolute right-0 top-0 w-24 md:w-50 right-anim1 lg:w-60 z-0 pointer-events-none' />
      <img src="/images/footer-drinks.png" alt="footer leaf" className='absolute right-2 md:right-10 bottom-0 w-32 md:w-40 lg:w-70 z-0 pointer-events-none' />

      {/* Centered content */}
      <div className="container-content z-10 px-4 md:px-0">
        <div className="flex flex-col justify-center items-center gap-4 md:gap-5">
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-modern-negra text-center'>Where to Find Us</h1>

          <div className="flex flex-col text-center gap-1">
            <p className='text-center text-sm md:text-base mb-1 md:mb-2'>VISIT TO OUR STORE</p>
            <p className='text-center text-lg md:text-xl px-2 md:px-0'>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
          </div>

          <div className="flex flex-col text-center gap-1">
            <p className='text-center text-sm md:text-base mb-1 md:mb-2'>CONTACT US</p>
            <p className='text-center text-lg md:text-xl'>(555) 987-6543</p>
            <p className='text-center text-lg md:text-xl'>tellyamir16@gmail.com</p>
          </div>

          <div className="flex flex-col text-center gap-1">
            <p className='text-center text-sm md:text-base mb-1 md:mb-2'>OPEN EVERY DAY</p>
            <div className="space-y-0.5 md:space-y-1">
              <p className='text-center text-base md:text-xl'>Mon-Thu : 11:00am - 12am</p>
              <p className='text-center text-base md:text-xl'>Fri : 11:00am - 2am</p>
              <p className='text-center text-base md:text-xl'>Sat : 9:00am - 2am</p>
              <p className='text-center text-base md:text-xl'>Sun : 9:00am - 1 am</p>
            </div>
          </div>

          <div className="flex flex-col mt-3 md:mt-4 gap-3 md:gap-4 justify-center items-center">
            <p className="text-center text-sm md:text-base">Socials</p> {/* hidden visually but readable by screen readers */}
            <div className="flex justify-center items-center gap-6 md:gap-9">
              <a href="https://www.instagram.com/talhaamirx/" target="_blank" rel="noopener noreferrer">
                <img src="/images/insta.png" alt="Instagram" className="w-6 h-6 md:w-8 md:h-8" />
              </a>
              <a href="https://x.com/Talha98772795" target="_blank" rel="noopener noreferrer">
                <img src="/images/x.png" alt="X / Twitter" className="w-6 h-6 md:w-8 md:h-8" />
              </a>
              <a href="https://www.facebook.com/share/16rgSavFYt/" target="_blank" rel="noopener noreferrer">
                <img src="/images/fb.png" alt="Facebook" className="w-6 h-6 md:w-8 md:h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact