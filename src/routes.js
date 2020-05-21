import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Containers';

export default () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route />
  </Switch>
);
