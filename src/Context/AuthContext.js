import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { createContext, useContext, useEffect, useReducer } from 'react'

const AuthContext = createContext()

const initialState = { isAuthenticated: false }
const reducer = (state, actions) => {
  switch (actions.type) {
    case 'LOGIN':
      return { isAuthenticated: true, user: actions.payload.user }
    case 'LOGOUT':
      return { isAuthenticated: false }
    default:
      return state
  }
}
export function AuthContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        dispatch({type:'LOGIN', payload:{user}})
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, [])
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}