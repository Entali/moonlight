import React, {Component} from 'react'
import Routes from '../../router'
import Button from '@material-ui/core/Button'
import {Logo} from '../Logo'
import {auth} from '../../firebase'
import './App.css'

class App extends Component {



  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        console.log('+', userAuth)
        userAuth.delete().then(what => console.log('what',what))
      } else {
        console.log('-')
      }
    })

    // return () => unsubscribeFromAuth(userAuth).then(() => {})
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
                <Button onClick={logout}>Logout</Button>
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
