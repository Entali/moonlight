import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Home} from './components/Home'
import {Auth} from './features/Auth'
import {UserModel} from './App'

type Props = {
  currentUser: UserModel
}

const Routes = ({ currentUser }: Props) => {
  return (
      <Switch>
        <Route exact path="/">
          <Home currentUser={currentUser}/>
        </Route>
        <Route exact path="/auth" component={Auth}/>
      </Switch>
  )
}

export default Routes
