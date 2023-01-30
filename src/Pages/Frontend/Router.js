import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import {Routes } from 'react-router-dom'

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

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/'>
                        <Route index element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/products' element={<Product />} />
                        <Route path='/categories' element={<Categories />} />
                        <Route path='/productDetail' element={<ProductDetail />} />
                        <Route path='/cart' element={<Cart />} />
                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}
