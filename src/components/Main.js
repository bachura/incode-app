import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../containers/auth/Login';
import Home from '../components/Home';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/login' component={Login} />
      <Route path='/auth' component={Login} />
      <Route path='/home' component={Home} />
      <Redirect from="/" to="/login" />
    </Switch>
  </main>
)

export default Main