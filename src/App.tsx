import React, {Component} from 'react'
import Routes from './router'
import {Header} from './components/Header'
import {auth} from './firebase'

class App extends Component {

  componentDidMount() {
    // login & logout listener
    auth.onAuthStateChanged(userAuth => {
      console.log('userAuth', userAuth)
    })
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
