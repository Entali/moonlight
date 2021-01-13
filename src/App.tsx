import React, {Component} from 'react'
import Routes from './router'
import {Header} from './components/Header'
import {auth} from './firebase'
import {createUserProfileDocument} from './features/Auth'

export type UserModel = {
  name: string | null,
  email: string | null,
  img: string | null,
  created: Date | string
} | null

class App extends Component {
  state = { currentUser: null }
  unsubscribeFromAuth: any = null

  componentDidMount() {
    // login & logout listener
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          this.setState({ currentUser: snapShot.data() })
        })
      }
      this.setState({ currentUser: null })
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
