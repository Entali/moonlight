import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Auth } from './features/Auth'
import { About } from './components/About'

const Routes = () => {
  return (
      <Switch>
        <Route exact path="/" component={Auth}/>
        <Route exact path="/about" component={About}/>
      </Switch>
  );
};

export default Routes
