import React, { Component } from 'react'
import { withRouter, RouteComponentProps } from 'react-router'
import Routes from '../../router'
import './App.css'

const INITIAL_STATE = {}

type Props = RouteComponentProps
type State = {}

class App extends Component<Props, State> {
  state = INITIAL_STATE

  render() {
    return (
        <section className="App">
          <Routes/>
        </section>
    )
  }
}

export default withRouter(App)
