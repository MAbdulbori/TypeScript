import { Route, Routes } from "react-router-dom"
import About from "./Companents/About/About"
import Contact from "./Companents/Contact/Contact"
import Features from "./Companents/Features/Features"
import Header from "./Companents/Header/Header"
import Hero from "./Companents/Hero/Hero"
import Pricing from "./Companents/Pricing/Pricing"
import Home from "./Companents/Home/Home"


function App() {

  return (
    <>
<h1>salom</h1>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
