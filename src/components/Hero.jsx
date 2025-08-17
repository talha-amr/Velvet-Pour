import React from 'react'

const Hero = () => {
    return (
        <div>
            <section id='hero' className='noisy'>
                <h1 className='text-gradient'>MOJITO</h1>
                <img className='left-leaf' alt='left-leaf' src='/images/hero-left-leaf.png'/>
                <img className='right-leaf' alt='right-leaf' src='/images/hero-right-leaf.png'/>
                <div className="absolute bottom-20 w-full left-0">
                    <div className="md:flex md:justify-between  container-content hidden">
                        <div className="space-y-5 w-1/2">
                            <p className='text-xl'>Cool.Crisp.Classic</p>
                            <p className="text-5xl font-bold text-yellow">
                                Sip the Spirit<br />of Summer
                            </p>
                        </div>
                        <div className='space-y-5 w-[25%] text-left text-xl'>
                            <p >
                                Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses.
                            </p>
                            <a className='view-cocktail'>
                                View Cocktail
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
