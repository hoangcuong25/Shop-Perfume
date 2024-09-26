import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../src/components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer/Footer"
import LogInSite from "./pages/LogInSite"


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/log-in' element={<LogInSite />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
