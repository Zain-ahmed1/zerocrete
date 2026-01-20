import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Layout Components
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Careers from './components/pages/careers'

// Page Components

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        {/* The Routes switch which component is shown based on URL */}
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}