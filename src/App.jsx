import './App.css'
import About from './components/About'
import Art from './components/Art'
import Cocktails from './components/Cocktails'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Loading from './components/Loading'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { useState, useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [startAnimations, setStartAnimations] = useState(false)

  useEffect(() => {
    const checkVideoLoaded = () => {
      const video = document.createElement('video')
      
      video.onloadeddata = () => {
        setIsLoading(false)
        
        // Start hero animations immediately after loading
        setStartAnimations(true)
      }

      video.onerror = () => {
        console.error('Error loading video')
        // Fallback: show page even if video fails to load
        setIsLoading(false)
        setStartAnimations(true)
      }

      video.src = '/videos/output.mp4'
      video.load()
    }

    checkVideoLoaded()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <Navbar/>
      <Hero startAnimations={startAnimations}/>
      <Cocktails/>
      <About/>
      <Art/>
      <Menu/>
      <Contact/>
    </>
  )
}

export default App