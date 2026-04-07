import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'

import { ApolloProvider } from "@apollo/client/react";
import { client } from './scripts/apollo.js'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Homepage from './Homepage.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Retrocafe from './pages/Retrocafe.jsx'
import MyCalendar from './components/Calendar.jsx'
import MemberForm from './pages/BliMedlem.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/omoss" element={<AboutUs />} />
          <Route path="/retrokafe" element={<Retrocafe />} />
          <Route path="/calender" element={<MyCalendar />} />
          <Route path="/bli-medlem" element={<MemberForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>,
)
