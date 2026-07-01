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
window.addEventListener("load", () => ScrollTrigger.refresh());
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [startAnimations, setStartAnimations] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [fontsLoaded, setFontsLoaded] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [videoUrl, setVideoUrl] = useState(null)

  const drinkImages = [
    '/images/drink1.png',
    '/images/drink2.png',
    '/images/drink3.png',
    '/images/drink4.png',
    '/images/noise.png',
    '/images/hero-left-leaf.png',
    '/images/hero-right-leaf.png'
  ]

  useEffect(() => {
    const checkVideoLoaded = async () => {
      try {
        const response = await fetch('/videos/output.mp4');
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setVideoUrl(url);
        setVideoLoaded(true);
      } catch (error) {
        console.error("Error loading video:", error);
        setVideoUrl('/videos/output.mp4');
        setVideoLoaded(true);
      }
    }

    const checkFontsLoaded = async () => {
      try {
        await Promise.all([
          document.fonts.load('16px "Modern Negra"'),
          document.fonts.load('16px "DM Serif Text"'),
          document.fonts.load('16px "Mona Sans"')
        ]);
        await document.fonts.ready;
        setFontsLoaded(true);
      } catch (error) {
        console.error("Font loading error:", error);
        setFontsLoaded(true);
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
      <Hero startAnimations={startAnimations} videoUrl={videoUrl}/>
      <Cocktails/>
      <About/>
      <Art/>
      <Menu/>
      <Contact/>
    </>
  )
}

export default App
