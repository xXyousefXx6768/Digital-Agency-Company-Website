import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { NavBarStatusProvider } from './Contexts/NavBarStatus.jsx'
import { NavBarStatusContext } from './Contexts/NavBarStatus.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
   <NavBarStatusProvider>
     <App />
   </NavBarStatusProvider>
  </BrowserRouter>
  </StrictMode>,
)
