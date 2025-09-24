import { useState,useContext } from 'react'
import './App.css'
import './index.css'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import ServicesPage from './Pages/ServicesPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import useLenis from './Hooks/UseLenis'
import { NavBarStatusProvider } from './Contexts/NavBarStatus.jsx'
import { NavBarStatusContext } from './Contexts/NavBarStatus.jsx'
import ResponsiveNav from './ResponsiveSections/ResponsiveNav.jsx'


function App() {
  const {isOpen,setIsOpen}=useContext(NavBarStatusContext)
  useLenis()
  return (
    
   <main id="app-container" className="flex min-h-screen overflow-hidden bg-dark text-light flex-col">
     <ResponsiveNav/>
     <NavBar />   
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/about" element={<AboutPage />} />
       <Route path="/contact" element={<ContactPage />} />
       <Route path="/services" element={<ServicesPage />} />
     </Routes>
     <Footer />
   </main>

  )
}

export default App