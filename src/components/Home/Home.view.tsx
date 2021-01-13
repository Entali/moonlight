import React, {Component} from 'react'
import {auth} from '../../firebase'
import {SignIn} from '../SignIn'

class HomeView extends Component {
  componentDidMount() {
    auth.onAuthStateChanged(userAuth => {
      console.log('userAuth', userAuth)
    })
  }

  render() {
    return (
        <section
            className="Home"
            style={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
        >
          <SignIn/>
        </section>
    )
  }
}

export default HomeView
