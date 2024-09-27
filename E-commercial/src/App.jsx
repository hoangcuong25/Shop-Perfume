import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../src/components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer/Footer"
import LogInSite from "./pages/LogInSite"
import Category from "./pages/Category"
import banner_men from '../src/assets/banner_men.png'
import banner_men1 from '../src/assets/banner_men1.png'
import banner_women from '../src/assets/banner_women.jpg'
import banner_women1 from '../src/assets/banner_women1.png'
import NewTrending from "./pages/NewTrending"
import SignUp from "./pages/SignUp"



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new-trending' element={<NewTrending />} />
          <Route path='/men' element={<Category category='men' banner={banner_men} banner1={banner_men1} />} />
          <Route path='/women' element={<Category category='women' banner={banner_women} banner1={banner_women1} />} />
          <Route path='/log-in' element={<LogInSite />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
