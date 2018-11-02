import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../containers/auth/Login';
import Home from '../components/Home';
import MyPage from '../components/MyPage';

const Main = () => (
  <main>
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/auth' component={Login} />
      <Route path='/home' component={Home} />
      <Route path='/mypage' component={MyPage} />
    </Switch>
  </main>
)

export default Main