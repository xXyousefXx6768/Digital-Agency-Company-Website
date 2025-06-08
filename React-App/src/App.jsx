import { useState } from 'react'
import './App.css'
import './index.css'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import WorksPage from './Pages/WorksPage'
import CareersPage from './Pages/CareersPage'
import ProcessPage from './Pages/ProcessPage'
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
       <Route path="/works" element={<WorksPage />} />
       <Route path="/careers" element={<CareersPage />} />
       <Route path="/process" element={<ProcessPage />} />
       <Route path="/contact" element={<ContactPage />} />
       <Route path="/services" element={<ServicesPage />} />
     </Routes>

     <Footer />
   </main>
  )
}

export default App