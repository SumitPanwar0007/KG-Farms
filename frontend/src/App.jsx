import React, { useState } from 'react'
import Footer from './component/footer/Footer'
import Navbar from './component/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import About from './pages/About/About'
import Products from './pages/Products/Products'
import LoginPopup from './component/LoginPopup/LoginPopup'


const App = () => {
  const[showLoginPopup,setShowLogin] = useState(false)
  return (
    <div className='p-4'>
      {showLoginPopup ?<LoginPopup  setShowLogin={setShowLogin}/>:<></>}
      <Navbar  showLoginPopup={showLoginPopup} setShowLoginPopup={setShowLogin} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/placeorder" element={<PlaceOrder />} />
      <Route path="*" element={<About />} />
    </Routes>

      <Footer />



    </div>
  )
}

export default App
