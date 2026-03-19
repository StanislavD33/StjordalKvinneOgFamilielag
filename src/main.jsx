import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Homepage from './Homepage.jsx'
import AboutUs from './pages/AboutUs.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/omoss" element={<AboutUs/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
