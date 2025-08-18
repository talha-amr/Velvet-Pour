import React from 'react'

const About = () => {
  return (
    <div>
        <section id="about">
        <div className="container-content">
            <div className="flex  w-[100%]  justify-between mt-20">
                <div className="flex flex-col gap-3 w-100">
                    <button className='btn w-30' onClick={()=>{console.log("hello")}}>Best Cocktails</button>
                    <h1 className="font-modern-negra  text-4xl">Where every detail matters—from muddle to garnish</h1>
                </div>
                <div className="flex flex-col  w-100">
                    <p className='text-xl mb-3'>Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable. </p>
                    <p className="font-bold text-2xl"><span className='text-yellow'>4.5</span>/5</p>
                    <p className="text-lg">More than +12000 customers</p>
                </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default About
