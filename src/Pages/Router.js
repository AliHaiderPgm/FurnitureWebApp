import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Pages
import Home from './Frontend/Home'

// Component
import Navbar from './Frontend/Components/Navbar'
import Footer from './Frontend/Components/Footer'

export default function Router() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/'>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
