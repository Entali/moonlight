import React, { useEffect, useReducer } from 'react'
import Routes from '../../router'
import './App.css'
import { auth } from '../../firebase'
import { getUserRef } from '../../features/Auth/Auth.actions'
import {
  authReducer,
  INITIAL_STATE as AUTH_INITIAL_STATE
} from '../../features/Auth/Auth.reducer'
import Button from '@material-ui/core/Button'

const App = () => {
  const [authState, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE)
  let unsubscribeFromAuth: any = null

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (!userAuth) return

      await getUserRef(userAuth, dispatch)
    })
    return () => {
      unsubscribeFromAuth()
    }
  }, [])

  return (
      <section className="App">
        <nav style={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '20px'
        }}>
          <Button>Sign in</Button>
          <Button>Sign out</Button>
        </nav>
        <Routes/>
      </section>
  )
}

export default App
