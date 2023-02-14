import React from 'react'
import { Navigate, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'

// Component
import Navbar from 'Pages/Frontend/Components/Navbar'
import Footer from 'Pages/Frontend/Components/Footer'

// Pages
import Home from 'Pages/Frontend/Home'
import About from 'Pages/Frontend/About'
import Contact from 'Pages/Frontend/Contact'
import Product from 'Pages/Frontend/Products'
import Categories from 'Pages/Frontend/Categories/Categories'
import ProductDetail from 'Pages/Frontend/ProductDetail'
import Cart from 'Pages/Frontend/Cart'
import Checkout from 'Pages/Frontend/Checkout'
import { useAuth } from 'Context/AuthContext'

export default function Router() {
    const {isAuthenticated} = useAuth()
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/'>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/products' element={<Product />} />
                    <Route path='/categories' element={<Categories />} />
                    <Route path='/productDetail' element={<ProductDetail />} />
                    <Route path='/cart' element={isAuthenticated ? <Cart /> : <Navigate to="/auth/signIn"/>} />
                    <Route path='/checkout' element={isAuthenticated ? <Checkout /> : <Navigate to="/auth/signIn"/>} />
                </Route>
            </Routes>
            <Footer />
        </>
    )
}
