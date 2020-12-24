import React, { useEffect, useReducer } from 'react'
import Routes from '../../router'
import './App.css'
import { auth } from '../../firebase'
import {
  createUserRef,
  setUserAction
} from '../../features/Auth/Auth.actions'
import {
  authReducer,
  INITIAL_STATE as AUTH_INITIAL_STATE
} from '../../features/Auth/Auth.reducer'
import Button from '@material-ui/core/Button'
import { UserModel } from '../../features/Auth/Auth.models'
import { Logo } from '../Logo'

const App = () => {
  const [authState, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE)
  let unsubscribeFromAuth: any = null
  const { currentUser } = authState

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserRef(userAuth)

        userRef.onSnapshot(snapshot => {
          dispatch(setUserAction(snapshot.data() as UserModel))
        })
      }

      dispatch(setUserAction(null))
    })

    return () => unsubscribeFromAuth()
  }, [])


  return (
      <section className="App">
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px'
        }}>
          {currentUser ? (
            <>
              <Logo/>
              <span>{currentUser.name}</span>
              <Button>Logout</Button>
            </>
          ) : (
            <>
              <Logo/>
            </>
          )}
        </nav>
        <Routes/>
      </section>
  )
}

export default App
