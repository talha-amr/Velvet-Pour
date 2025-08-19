import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
const About = () => {
    useGSAP(()=>{

        let tl = gsap.timeline({
        scrollTrigger: {
        trigger: "#about",
        start: 'top 30%',
		end: 'bottom 80%', 
        }
        
    });
        let textSplit=new SplitText('.split',{
            type:'lines'
        })
        tl.from(textSplit.lines,{
            stagger:0.1,
            opacity:0,
            yPercent:100
        })
        tl.from('.top-grid ',{
            opacity:0,
            stagger:0.1
        },)
        tl.from('.bottom-grid ',{
            opacity:0,
            stagger:0.1
            
        },)
    },[])
    return (
        <div>
            <section id="about">
                <div className="container-content">
                    <div className="flex flex-col md:flex-row justify-between items-center mt-20 w-full mx-auto px-5 gap-10">
                    <div className="flex flex-col gap-5 max-w-lg">
                        <button
                        className="btn w-fit text-base"
                        onClick={() => console.log("hello")}
                        >
                        Best Cocktails
                        </button>
                        <h1 className="font-modern-negra text-4xl md:text-6xl mt-2 split">
                        Where every detail matters—from muddle to garnish
                        </h1>
                    </div>

                    <div className="flex flex-col max-w-md text-left mt-9">
                        <p className="text-lg md:text-2xl mb-3">
                        Every cocktail we serve is a reflection of our obsession with detail — 
                        from the first muddle to the final garnish. That care is what turns a 
                        simple drink into something truly memorable.
                        </p>
                        <p className="font-bold text-xl md:text-2xl mt-4">
                        <span className="text-yellow text-2xl md:text-3xl">4.5</span>/5
                        </p>
                        <p className="text-base md:text-lg mt-3">More than +12000 customers</p>
                    </div>
                    </div>
                    <div className="top-grid mt-10">
                        <div className="md:col-span-3">
                            <div className="noisy" />
                            <img src="/images/abt1.png" alt="grid-img-1 " className='overflow-hidden' />
                        </div>
                        <div className="md:col-span-6">
                            <div className="noisy" />
                            <img src="/images/abt2.png" alt="grid-img-1 " className='overflow-hidden' />
                        </div>
                        <div className="md:col-span-3">
                            <div className="noisy" />
                            <img src="/images/abt3.png" alt="grid-img-1 " className='overflow-hidden' />
                        </div>
                    </div>
                    <div className="bottom-grid mt-2">
                        <div className="md:col-span-9">
                            <div className="noisy" />
                            <img src="/images/abt4.png" alt="grid-img-1 " className='overflow-hidden' />
                        </div>
                        <div className="md:col-span-3">
                            <div className="noisy" />
                            <img src="/images/abt5.png" alt="grid-img-1 " className='overflow-hidden' />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
