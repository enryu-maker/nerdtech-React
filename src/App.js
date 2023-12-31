import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route , Routes} from 'react-router-dom'
import Home from './pages/Home'
import Services from './components/services'
import dtbgt from './assets/DesktopDesign-4.png'
import Clients from './components/clients'
import { Aboutus, Contactus, Team } from './components/aboutus'
import Footer from './components/footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Blog from './components/blog'



function App() {
  

  return (
    <>
      <div className="flex flex-col items-center justify-center"
        style={{
          
        }}>
          <img src={dtbgt} alt="" className='absolute inset-0 w-screen h-screen z-0' />
          {/* <Header/> */}
          <Navbar/>
          <Home/>
          <Services/>
          <Clients/>
          <Aboutus/>
          <Blog/>
          <Team/>
          <Contactus/>
          <Footer/>
          {/* <Routes>
              <Route path="/" element={<Home/>} />
          </Routes> */}
      </div>
    </>
  )
}

export default App
