import { useGSAP } from '@gsap/react'
import React from 'react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

const Art = () => {
    useGSAP(()=>{
        let tl = gsap.timeline({
          scrollTrigger: {
		trigger: '#art',
		start: '20% top',
		end: 'bottom center',
		scrub: 1.5,
		pin: true,
        // markers:true
	 }
        });
        tl.to('.will-fade',{
            opacity:0
        })
            .to('.masked-img', {
                scale: 1.3,              
                maskPosition: 'center',  
                maskSize: '400%',        
                duration: 1,
                ease: 'power1.inOut'
            })
               tl.to('.will-show',{
            opacity:1
        })
    },[])
    
    return (
        <section id='art' className='radial-gradient'>
            <div className='container-content'>
                <div className="flex flex-col justify-between items-center w-full">
                    <h1 className='artText will-fade text-center mb-8 md:mb-0'>The Art </h1>
                    <div className="cocktail-img hidden md:block">
                        <img src="/images/under-img.jpg" alt="under-image" className='masked-img size-full object-contain' />
                    </div>
                    <div className="flex w-full justify-center md:justify-between items-center will-fade md:flex-row flex-col md:space-y-0 space-y-3 md:items-center items-center">
                        <div className="w-full md:w-auto max-w-sm md:max-w-none mx-auto md:mx-0">
                            <div className="flex flex-col space-y-1 md:space-y-2 text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start">
                                    <img src="/images/check.png" className="w-4 h-4 md:w-5 md:h-5 me-2" alt="check" />
                                    <span className="text-base md:text-lg lg:text-xl">Handpicked ingredients</span>
                                </div>
                                <div className="flex items-center justify-center md:justify-start">
                                    <img src="/images/check.png" className="w-4 h-4 md:w-5 md:h-5 me-2" alt="check" />
                                    <span className="text-base md:text-lg lg:text-xl">Signature techniques</span>
                                </div>
                                <div className="flex items-center justify-center md:justify-start">
                                    <img src="/images/check.png" className="w-4 h-4 md:w-5 md:h-5 me-2" alt="check" />
                                    <span className="text-base md:text-lg lg:text-xl">Bartending artistry in action</span>
                                </div>
                                <div className="flex items-center justify-center md:justify-start">
                                    <img src="/images/check.png" className="w-4 h-4 md:w-5 md:h-5 me-2" alt="check" />
                                    <span className="text-base md:text-lg lg:text-xl">Freshly muddled flavors</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-auto max-w-sm md:max-w-none mx-auto md:mx-0">
                            <div className="flex flex-col space-y-1 md:space-y-2 text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start">
                                    <img src="/images/check.png" className="w-4 h-4 md:w-5 md:h-5 me-2" alt="check" />
                                    <span className="text-base md:text-lg lg:text-xl">Perfectly balanced blends</span>
                                </div>
                                <div className="flex items-center justify-center md:justify-start">
                                    <img src="/images/check.png" className="w-4 h-4 md:w-5 md:h-5 me-2" alt="check" />
                                    <span className="text-base md:text-lg lg:text-xl">Garnished to perfection</span>
                                </div>
                                <div className="flex items-center justify-center md:justify-start">
                                    <img src="/images/check.png" className="w-4 h-4 md:w-5 md:h-5 me-2" alt="check" />
                                    <span className="text-base md:text-lg lg:text-xl">Ice-cold every time</span>
                                </div>
                                <div className="flex items-center justify-center md:justify-start">
                                    <img src="/images/check.png" className="w-4 h-4 md:w-5 md:h-5 me-2" alt="check" />
                                    <span className="text-base md:text-lg lg:text-xl">Expertly shaken & stirred</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:mt-50 mt-20 w-full">
                    <div className="text-center font-modern-negra will-fade text-3xl md:text-5xl">Sip-Worthy Perfection</div>
                    <h2 className='text-3xl md:text-5xl will-show font-modern-negra text-center opacity-0'>Made with Craft<span className="font-sans font-bold">,</span> Poured With Passion</h2>
                    <p className='text-center will-show text-lg md:text-xl mt-2 opacity-0 px-4 md:px-0'>This isn't just a drink. It's a carefully crafted moment made just for you.</p>
                </div>
            </div>
        </section>
    )
}

export default Art