
import './App.css'
import About from './components/About'
import Art from './components/Art'
import Cocktails from './components/Cocktails'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import gsap from 'gsap'
import { ScrollTrigger,SplitText } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger,SplitText)

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Cocktails/>
      <About/>
      <Art/>
       <div className="h-dvh bg-black"></div> 
    </>
  )
}

export default App
