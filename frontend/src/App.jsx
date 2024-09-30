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
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import ParticularBrand from "./pages/ParticularBrand"
import Brands from "./pages/Brands"
import Discovery from "./pages/Discovery"
import Gifting from "./pages/Gifting"
import FaceBody from "./pages/BathBody"



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
          <Route path="/product/:idProduct" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/discovery" element={<Discovery />} />
          <Route path='/gifting' element={<Gifting />} />
          <Route path='/bathandbody' element={<FaceBody />} />

          <Route path='/Dolce&Gabbana' element={<ParticularBrand brands="Dolce & Gabbana" />} />
          <Route path='/CarolinaHerrera' element={<ParticularBrand brands="Carolina Herrera" />} />
          <Route path='/Gucci' element={<ParticularBrand brands="Gucci" />} />
          <Route path='/MarcJacobs' element={<ParticularBrand brands="Marc Jacobs" />} />
          <Route path='/TOMFORD' element={<ParticularBrand brands="TOM FORD" />} />
          <Route path='/Versace' element={<ParticularBrand brands="Versace" />} />
          <Route path='/brands' element={<Brands />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
