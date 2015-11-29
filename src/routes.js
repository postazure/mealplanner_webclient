import React from 'react'
import App from './scripts/app.js'
import Login from './scripts/components/login/login.js'
import { Route } from 'react-router'

module.exports = (
  <Route path="/" component={App}>
    <Route path="login" component={Login}/>
  </Route>
);

//<Route path="*" component={NoMatch}/>