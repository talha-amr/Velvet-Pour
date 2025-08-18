import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'
const Hero = () => {
    let vidRef=useRef()
    useGSAP(() => {
        let titleSplit = new SplitText('.hero-title', {
            type: 'words chars'
        });

        let paragraphSplit = new SplitText('.hero-content', {
            type: 'lines'
        });

        titleSplit.chars.forEach((char) => char.classList.add("text-gradient"));

        let tl = gsap.timeline();
        tl.from(titleSplit.chars, {
            opacity: 0,
            yPercent: 100,
            stagger: 0.1,
            ease: 'expo.Out'
        });
        tl.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            stagger: 0.1,
            ease: 'expo.Out'
        })
          let leaf = gsap.timeline({
            scrollTrigger: {
              trigger: "#hero",
              start: "top top",
              end:'bottom top',
              scrub:true
            }
          });
        leaf.to(".left-leaf", {
            y: 200
        }, 0); 

        leaf.to(".right-leaf", {
            y: -200
        }, 0);
        let video = gsap.timeline({
        scrollTrigger: {
            trigger: "video",
            scrub: true,
            start: () => "center " + (window.innerHeight * 0.6), 
            end: () => "+=" + window.innerHeight,
            pin:true,
            // markers:true
        },
        });

        vidRef.current.onloadedmetadata = () => {
        video.to(vidRef.current, {
            currentTime: vidRef.current.duration,
        });
};
    }, []);
    return (
        <div>
            <section id='hero' className='noisy'>
                <h1 className='hero-title'>MOJITO</h1>
                <img className='left-leaf' alt='left-leaf' src='/images/hero-left-leaf.png' />
                <img className='right-leaf' alt='right-leaf' src='/images/hero-right-leaf.png' />
                <div className="absolute bottom-20 w-full left-0">
                    <div className="md:flex md:justify-between   container-content hidden ">
                        <div className="space-y-4 w-1/2 max-w-2xl">
                            <p className='text-xl hero-content'>Cool. Crisp. Classic</p>
                            <p className="subtitle text-5xl font-bold hero-content text-yellow">
                                Sip the Spirit<br />of Summer
                            </p>
                        </div>

                        <div className='space-y-2 max-w-md w-xs text-left text-lg subtitle hero-content'>
                            <p>
                                Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses.
                            </p>
                            <a className='view-cocktail'>View Cocktail</a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="video absolute inset-0">
                <video
                    ref={vidRef}
                    muted
                    playsInline
                    preload="auto"
                    src="/videos/output.mp4"
                />
            </div>
        </div>
    )
}

export default Hero
