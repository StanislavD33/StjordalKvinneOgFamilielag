import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Homepage from './Homepage.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Retrocafe from './pages/Retrocafe.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/omoss" element={<AboutUs/>}/>
        <Route path="/retrocafe" element={<Retrocafe/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
