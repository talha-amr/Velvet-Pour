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
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    const checkVideoLoaded = () => {
      const video = document.createElement('video')
      
      video.onloadeddata = () => {
        setVideoLoaded(true)
      }

      video.onerror = () => {
        console.error('Error loading video')
        // Fallback: consider video "loaded" even if it fails
        setVideoLoaded(true)
      }

      video.src = '/videos/output.mp4'
      video.load()
    }

    const checkFontsLoaded = async () => {
      try {
        // Wait for fonts to be ready
        await document.fonts.ready
        setFontsLoaded(true)
      } catch (error) {
        console.error('Error loading fonts:', error)
        // Fallback: consider fonts "loaded" even if check fails
        setFontsLoaded(true)
      }
    }

    checkVideoLoaded()
    checkFontsLoaded()
  }, [])

  // Check if both video and fonts are loaded
  useEffect(() => {
    if (videoLoaded && fontsLoaded) {
      setIsLoading(false)
      setStartAnimations(true)
    }
  }, [videoLoaded, fontsLoaded])

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