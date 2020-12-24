import React from 'react'
import Routes from '../../router'
import Button from '@material-ui/core/Button'
import { Logo } from '../Logo'
import useAuth from '../../hooks/useAuth'
import './App.css'

const App = () => {
  const { currentUser } = useAuth()

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
