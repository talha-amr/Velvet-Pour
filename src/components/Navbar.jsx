import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

const Navbar = () => {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
        scrub: true,
      },
    });

    tl.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      { backgroundColor: "#00000090" }
    );
  }, []);

  return (
    <nav>
      <div className="container-content">
        <div className="nav-flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-left">
          
          {/* Logo + Title */}
          <div className="flex gap-2 justify-center md:justify-start items-center mb-4 md:mb-0">
            <img src='/images/logo.png' alt='logo' className="w-8 h-8" />
            <p className="title">Velvet Pour</p>
          </div>

          {/* Links */}
          <ul className="flex md:flex-row gap-4 md:gap-6 justify-center md:justify-end items-center">
            <li>
              <a 
                href="#cocktails" 
                className="text-base whitespace-nowrap hover:text-yellow-400 transition-colors duration-200"
              >
                cocktails
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="text-base whitespace-nowrap hover:text-yellow-400 transition-colors duration-200"
              >
                about us
              </a>
            </li>
            <li>
              <a 
                href="#art" 
                className="text-base whitespace-nowrap hover:text-yellow-400 transition-colors duration-200"
              >
                the art
              </a>
            </li>
            <li>
              <a 
                href="#menu" 
                className="text-base whitespace-nowrap hover:text-yellow-400 transition-colors duration-200"
              >
                menu
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="text-base whitespace-nowrap hover:text-yellow-400 transition-colors duration-200"
              >
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
