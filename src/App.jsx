import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Offer from './components/Offer/Offer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Hero />
     <Offer />
    </>
  )
}

export default App
