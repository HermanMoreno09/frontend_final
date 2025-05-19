import React from 'react'
import Navbar from './Navbar'
import Content from './Content'
import Footer from './Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function MainPanel() {
  return (
    
        <div className="main-panel">
          <Navbar />
          <Content />
          <Footer />
        </div>
        
  )
}

export default MainPanel
