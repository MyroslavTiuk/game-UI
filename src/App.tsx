import React from "react"
import Navbar from "./Navbar"
import Pricing from "./pages/Pricing"
import Home from "./pages/home"
import About from "./pages/about/About"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />  
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
