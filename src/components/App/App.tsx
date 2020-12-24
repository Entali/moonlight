import React, { useEffect, useReducer } from 'react'
import Routes from '../../router'
import './App.css'
import { auth } from '../../firebase'
import {
  getUserRef,
  setUserAction
} from '../../features/Auth/Auth.actions'
import {
  authReducer,
  INITIAL_STATE as AUTH_INITIAL_STATE
} from '../../features/Auth/Auth.reducer'
import Button from '@material-ui/core/Button'
import { UserModel } from '../../features/Auth/Auth.models'

const App = () => {
  const [authState, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE)
  let unsubscribeFromAuth: any = null
  const { currentUser } = authState

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (!userAuth) return
      const userRef = await getUserRef(userAuth, dispatch)

      userRef.onSnapshot(snapshot => {
        dispatch(setUserAction(snapshot.data() as UserModel))
      })
    })

    return () => unsubscribeFromAuth()
  }, [])


  return (
      <section className="App">
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px'
        }}>
          {currentUser ? (
            <>
              <span>{currentUser.name}</span>
              <Button>Logout</Button>
            </>
          ) : (
            <>
              <span/>
              <Button>Login</Button>
            </>
          )}
        </nav>
        <Routes/>
      </section>
  )
}

export default App
