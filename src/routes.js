import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Admin from './Admin';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/admin" component={Admin} />
    </Switch>
  </BrowserRouter>
);
