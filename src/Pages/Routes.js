import { useAuth } from 'Context/AuthContext'
import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Auth from './Auth'
import Frontend from './Frontend'
export default function Index() {
    const {isAuthenticated} = useAuth()
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/*' element={<Frontend />} />
                    <Route path='/auth/*' element={!isAuthenticated ? <Auth /> : <Navigate to="/"/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
