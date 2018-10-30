import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from '../containers/auth/Login';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/login' component={Login} />
      <Route path='/auth' component={Login} />
      <Route path='/' component={Home} />
    </Switch>
  </main>
)

export default Main