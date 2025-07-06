import { useState } from 'react'
import './App.css'
import './index.css'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import ServicesPage from './Pages/ServicesPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'


function App() {


  return (
   <main className="flex min-h-screen overflow-hidden bg-dark text-light flex-col">
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