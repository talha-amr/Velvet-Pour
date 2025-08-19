import './App.css'
import About from './components/About'
import Art from './components/Art'
import Cocktails from './components/Cocktails'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { useState, useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleLoad = () => setIsLoading(false)
    window.addEventListener('load', handleLoad)
    return () => window.removeEventListener('load', handleLoad)
  }, [])

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
          <img
            src="/images/logo.png"
            alt="Velvet Pour"
            className="w-20 h-20 animate-pulse"
          />
        </div>
      )}

      <div className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-700`}>
        <Navbar/>
        <Hero/>
        <Cocktails/>
        <About/>
        <Art/>
        <Menu/>
        <Contact/>
      </div>
    </>
  )
}

export default App
