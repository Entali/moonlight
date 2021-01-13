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
      console.log('onAuthStateChanged - user:', user)
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

  logout = () => {
    this.setState({ currentUser: null })
    return auth.signOut()
  }

  render() {
    return (
        <section className="App">
          <Header currentUser={this.state.currentUser} logout={this.logout}/>
          <Routes/>
        </section>
    )
  }
}

export default App
