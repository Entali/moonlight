import React, {Component} from 'react'
import Routes from './router'
import {Header} from './components/Header'
import {auth} from './firebase'

class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth: any = null

  componentDidMount() {
    // login & logout listener
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      const currentUser = user && {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        img: user.photoURL,
        created: new Date()
      }
      this.setState({ currentUser })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
        <section className="App">
          <Header/>
          <Routes/>
        </section>
    )
  }
}

export default App
