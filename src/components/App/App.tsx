import React, { useEffect } from 'react'
import Routes from '../../router'
import './App.css'
import { auth } from '../../firebase'
import { getUserRef } from '../../features/Auth/Auth.actions'

const App = () => {
  let unsubscribeFromAuth: any = null

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (!userAuth) return
      console.log('userAuth',userAuth)

      await getUserRef(userAuth)
    })
    return () => {
      unsubscribeFromAuth()
    }
  }, [])

  return (
      <section className="App">
        <Routes/>
      </section>
  )
}

export default App
