import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from 'Pages/Auth/Login'
import SignUp from './SignUp/SignUp'
import  ForgotPassword  from './ForgetPassword'

export default function index() {
  return (
   <>
    <Routes>
      <Route path='/'>
        <Route path='signIn' element={<Login/>}/>
        <Route path='signUp' element={<SignUp/>}/>
        <Route path='forgotPassword' element={<ForgotPassword/>}/>
      </Route>
    </Routes>
   </>
  )
}
