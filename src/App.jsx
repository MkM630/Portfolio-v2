import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Project from './components/Project/Project'
import ContactPage from './components/ContactPage/ContactPage'



function App() {
  return (
    <>
      <Navbar/>  
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <ContactPage/>
    </>
  )
}

export default App
