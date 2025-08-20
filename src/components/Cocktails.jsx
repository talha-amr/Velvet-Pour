import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Cocktails = () => {
    useGSAP(() => {
    let leaf = gsap.timeline({
        scrollTrigger: {
        trigger: "#cocktails",
        start: 'top 30%',
		end: 'bottom 80%', 
        scrub: true,
        // markers: true
        }
    });
        leaf.to('.left-anim',{
            x: -100, y: 100,
            ease:"none"
        })
        leaf.to('.right-anim',{
            x: 100, y: 100,
            ease:"none"
        })
    },[])
  return (
   <>
        <section id='cocktails' className='noisy py-16 md:py-0'>
            <img src="/images/cocktail-left-leaf.png" alt="cocktail-left-leaf" className='absolute bottom-24 left-0 -z-10 left-anim w-20 md:w-auto'/>
            <img src="/images/cocktail-right-leaf.png" alt="cocktail-right-leaf" className='absolute bottom-24 right-0 -z-10 right-anim w-20 md:w-auto'/>
            <div className="container-content">
                <div className="flex flex-col md:flex-row w-full justify-between mt-12 md:mt-20 gap-8 md:gap-0 px-4 md:px-0">
                    {/* Most Popular Cocktails Column */}
                    <div className="flex flex-col gap-2 w-full md:w-auto">
                        <p className='text-lg mb-2 text-white'>Most Popular Cocktails</p>
                        <div className="flex justify-between w-full space-y-2">
                            <div>
                                <h1 className="font-modern-negra text-yellow text-2xl md:text-3xl">Chapel Hill Shiraz</h1>
                                <p className="text-gray-300">AU | Battle</p>
                            </div>
                            <h3 className='text-xl md:text-2xl text-white'>-10$</h3>
                        </div>
                        <div className="flex justify-between w-full space-y-2">
                            <div>
                                <h1 className="font-modern-negra text-yellow text-2xl md:text-3xl">Caten Malbee</h1>
                                <p className="text-gray-300">AU | Battle</p>
                            </div>
                            <h3 className='text-xl md:text-2xl text-white'>-49$</h3>
                        </div>
                        <div className="flex justify-between w-full space-y-2">
                            <div>
                                <h1 className="font-modern-negra text-yellow text-2xl md:text-3xl">Rhino Pale Ale</h1>
                                <p className="text-gray-300">CA | 750 ml</p>
                            </div>
                            <h3 className='text-xl md:text-2xl text-white'>-20$</h3>
                        </div>
                        <div className="flex justify-between w-full space-y-2">
                            <div>
                                <h1 className="font-modern-negra text-yellow text-2xl md:text-3xl">Irish Guinness</h1>
                                <p className="text-gray-300">IE | 600 ml</p>
                            </div>
                            <h3 className='text-xl md:text-2xl text-white'>-29$</h3>
                        </div>
                    </div>

                    {/* Most Loved Mocktails Column */}
                    <div className="flex flex-col gap-2 w-full md:w-auto">
                        <p className='text-lg mb-2 text-white'>Most Loved Mocktails</p>
                        <div className="flex justify-between w-full space-y-2">
                            <div>
                                <h1 className="font-modern-negra text-yellow text-2xl md:text-3xl">Tropical Bloom</h1>
                                <p className="text-gray-300">AU | Battle</p>
                            </div>
                            <h3 className='text-xl md:text-2xl text-white'>-10$</h3>
                        </div>
                        <div className="flex justify-between w-full space-y-2">
                            <div>
                                <h1 className="font-modern-negra text-yellow text-2xl md:text-3xl">Passionfruit Mint</h1>
                                <p className="text-gray-300">AU | Battle</p>
                            </div>
                            <h3 className='text-xl md:text-2xl text-white'>-49$</h3>
                        </div>
                        <div className="flex justify-between w-full space-y-2">
                            <div>
                                <h1 className="font-modern-negra text-yellow text-2xl md:text-3xl">Citrus Glow</h1>
                                <p className="text-gray-300">CA | 750 ml</p>
                            </div>
                            <h3 className='text-xl md:text-2xl text-white'>-20$</h3>
                        </div>
                        <div className="flex justify-between w-full space-y-2">
                            <div>
                                <h1 className="font-modern-negra text-yellow text-2xl md:text-3xl">Lavender Fizz</h1>
                                <p className="text-gray-300">IE | 600 ml</p>
                            </div>
                            <h3 className='text-xl md:text-2xl text-white'>-29$</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>

   </>
  )
}

export default Cocktails