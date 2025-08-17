
import './App.css'
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
      <div className="h-dvh bg-black"></div>
    </>
  )
}

export default App
