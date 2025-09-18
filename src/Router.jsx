import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Staff from './pages/Staff'
import Cart from './pages/Cart'

const Router = () => {
  return (
    // ger routing context till alla under-komponenter
    <BrowserRouter>
        {/* enkel nav  */}
        <nav>
            <Link to="/">Hem</Link>
            <Link to="/staff">Personal</Link>
            <Link to="/cart">Kundvagn</Link>
        </nav>

        {/* Routes (innan Switch) som matchar nuvarande url till Route */}
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/cart" element={<Cart />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router