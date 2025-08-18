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
        <section id='cocktails' className='noisy'>
            <img src="/images/cocktail-left-leaf.png" alt="cocktail-left-leaf" className='absolute bottom-24 left-0 -z-10 left-anim'/>
            <img src="/images/cocktail-right-leaf.png" alt="cocktail-right-leaf" className='absolute bottom-24 right-0 -z-10 right-anim'/>
            <div className="container-content">
                <div className="flex  w-[100%]  justify-between mt-20">
                    <div className="flex flex-col gap-2">
                        <p className='text-lg mb-2'>Most Popular Cocktails</p>
                        <div className="flex justify-between w-100 space-y-2">
                            <div >
                                <h1 className="font-modern-negra text-yellow text-3xl">Chapel Hill Shiraz</h1>
                                <p>AU | Battle</p>
                            </div>
                            <h3 className='text-2xl'>-10$</h3>
                        </div>
                        <div className="flex justify-between w-100 space-y-2">
                            <div >
                                <h1 className="font-modern-negra text-yellow text-3xl">Caten Malbee</h1>
                                <p>AU | Battle</p>
                            </div>
                            <h3 className='text-2xl'>-49$</h3>
                        </div>
                        <div className="flex justify-between w-100 space-y-2">
                            <div >
                                <h1 className="font-modern-negra text-yellow text-3xl">Rhino Pale Ale</h1>
                                <p>CA | 750 ml</p>
                            </div>
                            <h3 className='text-2xl'>-20$</h3>
                        </div>
                        <div className="flex justify-between w-100 space-y-2">
                            <div >
                                <h1 className="font-modern-negra text-yellow text-3xl">Irish Guinness</h1>
                                <p>IE | 600 ml</p>
                            </div>
                            <h3 className='text-2xl'>-29$</h3>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className='text-lg mb-2'>Most Loved Mocktails</p>
                        <div className="flex justify-between w-100 space-y-2">
                            <div >
                                <h1 className="font-modern-negra text-yellow text-3xl">Tropical Bloom</h1>
                                <p>AU | Battle</p>
                            </div>
                            <h3 className='text-2xl'>-10$</h3>
                        </div>
                        <div className="flex justify-between w-100 space-y-2">
                            <div >
                                <h1 className="font-modern-negra text-yellow text-3xl">Passionfruit Mint</h1>
                                <p>AU | Battle</p>
                            </div>
                            <h3 className='text-2xl'>-49$</h3>
                        </div>
                        <div className="flex justify-between w-100 space-y-2">
                            <div >
                                <h1 className="font-modern-negra text-yellow text-3xl">Citrus Glow</h1>
                                <p>CA | 750 ml</p>
                            </div>
                            <h3 className='text-2xl'>-20$</h3>
                        </div>
                        <div className="flex justify-between w-100 space-y-2">
                            <div >
                                <h1 className="font-modern-negra text-yellow text-3xl">Lavender Fizz</h1>
                                <p>IE | 600 ml</p>
                            </div>
                            <h3 className='text-2xl'>-29$</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>

   </>
  )
}

export default Cocktails
