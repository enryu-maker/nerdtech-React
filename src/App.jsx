import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Services from './components/services'
import dtbgt from './assets/DesktopDesign-4.png'
import Clients from './components/clients'
import { Aboutus, Contactus, Team } from './components/aboutus'
import Footer from './components/footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Blog from './components/blog'
import { Helmet } from 'react-helmet'



function App() {


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NerdTech :: Web Development and Mobile Applications Development Agency</title>
        <description>
          Welcome to NERDTECH - Your Partner in Digital Excellence. Unleash the power of innovation with our state-of-the-art software solutions. From intuitive user experiences to unparalleled efficiency, we redefine what's possible. Explore our comprehensive suite of products and services and embark on a journey to elevate your business in the digital era.
        </description>
      </Helmet>
      <div className="flex flex-col items-center justify-center">
        <img src={dtbgt} alt="" className='absolute inset-0 w-screen h-screen z-0' />
        <Navbar />
        <Home />
        <Services />
        <Clients />
        <Aboutus />
        <Blog />
        <Team />
        <Contactus />
        <Footer />
      </div>
    </>
  )
}

export default App
