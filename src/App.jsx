import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Recycling from "./Components/Recycling/Recycling"
import Johkasou from "./Components/Johkasou/Johkasou"
import About from "./Components/About/About"
import Installation from "./Components/Installation/Installation"
import Connect from "./Components/Connect/Connect"
import Sidebar from "./Components/Navbar/Sidebar"

function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="aboutUs" element={<About />} />
        <Route path="/waterRecycling" element= {<Recycling />} />
        <Route path="/johkasouTechnology" element= {<Johkasou />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/letsConnect" element={<Connect />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
