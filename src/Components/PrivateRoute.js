import { useAuth } from 'Context/AuthContext'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PrivateRoute({Component}) {
    const {isAuthenticated} = useAuth()
    const navigate = useNavigate()
    if(isAuthenticated) {
        return <Component/>
    }
    else{
        navigate('/auth/signIn')
    }
}
