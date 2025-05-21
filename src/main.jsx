import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

// AOS imports
import AOS from 'aos';
import 'aos/dist/aos.css';

import App from './App.jsx'
import AboutPage from './about.jsx'
import Portfolio from './pages/Portfolio.jsx'
import CaseStudy from './pages/CaseStudy.jsx'
import ScrollToTop from './components/ScrollToTop'

// Initialize AOS
AOS.init({
  duration: 400,
  once: false,
});

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<CaseStudy />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
