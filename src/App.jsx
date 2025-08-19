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
  const [imagesLoaded, setImagesLoaded] = useState(false)

  const drinkImages = [
    '/images/drink1.png',
    '/images/drink2.png',
    '/images/drink3.png',
    '/images/drink4.png'
  ]

  useEffect(() => {
    const checkVideoLoaded = () => {
      const video = document.createElement('video')
      
      video.onloadeddata = () => setVideoLoaded(true)
      video.onerror = () => setVideoLoaded(true)
      video.src = '/videos/output.mp4'
      video.load()
    }

    const checkFontsLoaded = async () => {
      try {
        await document.fonts.ready
        setFontsLoaded(true)
      } catch {
        setFontsLoaded(true)
      }
    }

    const checkImagesLoaded = () => {
      let loadedCount = 0
      drinkImages.forEach(src => {
        const img = new Image()
        img.src = src
        img.onload = () => {
          loadedCount++
          if (loadedCount === drinkImages.length) setImagesLoaded(true)
        }
        img.onerror = () => {
          console.error('Error loading image:', src)
          loadedCount++
          if (loadedCount === drinkImages.length) setImagesLoaded(true)
        }
      })
    }

    checkVideoLoaded()
    checkFontsLoaded()
    checkImagesLoaded()
  }, [])

  useEffect(() => {
    if (videoLoaded && fontsLoaded && imagesLoaded) {
      setIsLoading(false)
      setStartAnimations(true)
    }
  }, [videoLoaded, fontsLoaded, imagesLoaded])

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
