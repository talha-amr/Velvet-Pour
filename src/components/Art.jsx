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
                <div className=" flex flex-col justify-between items-center w-full">
                    <h1 className='artText will-fade'>The Art </h1>
                    <div className="cocktail-img">
                        <img src="/images/under-img.jpg" alt="under-image" className='masked-img size-full object-contain masked-img size-full object-contain  ' />
                    </div>
                    <div className="flex w-full justify-between items-center will-fade">
                        <div className="flex flex-col space-y-2">
                            <div className="flex items-center">
                                <img src="/images/check.png" className="w-5 h-5 me-2" alt="check" />
                                <span className="text-lg md:text-xl">Handpicked ingredients</span>
                            </div>
                            <div className="flex items-center">
                                <img src="/images/check.png" className="w-5 h-5 me-2" alt="check" />
                                <span className="text-lg md:text-xl">Signature techniques</span>
                            </div>
                            <div className="flex items-center">
                                <img src="/images/check.png" className="w-5 h-5 me-2" alt="check" />
                                <span className="text-lg md:text-xl">Bartending artistry in action</span>
                            </div>
                            <div className="flex items-center">
                                <img src="/images/check.png" className="w-5 h-5 me-2" alt="check" />
                                <span className="text-lg md:text-xl">Freshly muddled flavors</span>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <div className="flex items-center">
                                <img src="/images/check.png" className="w-5 h-5 me-2" alt="check" />
                                <span className="text-lg md:text-xl">Perfectly balanced blends</span>
                            </div>
                            <div className="flex items-center">
                                <img src="/images/check.png" className="w-5 h-5 me-2" alt="check" />
                                <span className="text-lg md:text-xl">Garnished to perfection</span>
                            </div>
                            <div className="flex items-center">
                                <img src="/images/check.png" className="w-5 h-5 me-2" alt="check" />
                                <span className="text-lg md:text-xl">Ice-cold every time</span>
                            </div>
                            <div className="flex items-center">
                                <img src="/images/check.png" className="w-5 h-5 me-2" alt="check" />
                                <span className="text-lg md:text-xl">Expertly shaken & stirred</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-50  w-full ">
                    <div className="text-center   font-modern-negra will-fade text-5xl">Sip-Worthy Perfection</div>
                    <h2 className='text-5xl will-show font-modern-negra text-center opacity-0'>Made with Craft<span className="font-sans font-bold">,</span> Poured With Passion</h2>
                    <p className='text-center will-show  text-xl mt-2 opacity-0'>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
                </div>
            </div>
        </section>
    )
}

export default Art
