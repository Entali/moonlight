import React, { Component } from 'react'
import { withRouter, RouteComponentProps } from 'react-router'
import Routes from './router'
import './App.css'

const INITIAL_STATE = {}

type Props = RouteComponentProps & {}

class App extends Component<Props> {
  state = INITIAL_STATE

  render() {
    console.log('App props', this.props)
    return (
        <section className="App">
          <Routes/>
        </section>
    )
  }
}

export default withRouter(App)
