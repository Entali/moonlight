import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Auth } from './features/Auth'

const Routes = () => {
  return (
      <Switch>
        <Route path="/" component={Auth}/>
      </Switch>
  );
};

export default Routes
