import React from 'react'
import './App.scss'

import { About, Footer, Header, Work, Skills, Testimonials } from './container';

import { Navbar } from './components';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Testimonials />
      <Skills />
      <Work />
      <Footer />
    </div>
  )
}

export default App
