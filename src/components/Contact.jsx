import React from 'react'

const Contact = () => {
  return (
    <section className="noisy" id="contact">
    <img src="/images/footer-left-leaf.png" alt="footer leaf" className='absolute left-0 bottom-0 w-40 md:w-50 z-0 pointer-events-none'/>
    <img src="/images/footer-right-leaf.png" alt="footer leaf" className='absolute right-0 top-0 w-40 md:w-50 z-0 pointer-events-none'/>
    <img src="/images/footer-drinks.png" alt="footer leaf" className='absolute right-10 bottom-0 w-40 md:w-70 z-0 pointer-events-none'/>
    <div className="container-content">
        <div className="flex flex-col justify-center items-center gap-5 mt-[3.5rem]">
            <h1 className='text-7xl font-modern-negra text-center'>Where to Find Us</h1>
            <div className="flex flex-col text-center gap-1">
                <p className='text-center text-base mb-2'>VISIT TO OUR STORE</p>
                <p className='text-center text-xl'>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
            </div>
            <div className="flex flex-col text-center gap-1">
                <p className='text-center text-base mb-2'>CONTACT US</p>
                <p className='text-center text-xl'>(555) 987-6543</p>
                <p className='text-center text-xl'>hello@jsmcocktail.com</p>
            </div>
            <div className="flex flex-col text-center gap-1">
                <p className='text-center text-base mb-2'>OPEN EVERY DAY</p>
                <p className='text-center text-xl'>Mon-Thu : 11:00am - 12am</p>
                <p className='text-center text-xl'>Fri : 11:00am - 2am</p>
                <p className='text-center text-xl'>Sat : 9:00am - 2am</p>
                <p className='text-center text-xl'>Sun : 9:00am - 1 am</p>
            </div>
            <div className="flex flex-col mt-4 gap-4 justify-center items-center">
                <p className='text-center'>Socials</p>
                <div className="flex justify-center items-center gap-9">
                    <img src="/images/insta.png" alt="insta" />
                    <img src="/images/x.png" alt=" x" />
                    <img src="/images/fb.png" alt="fb" />
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Contact
