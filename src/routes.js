import React from 'react'
import App from './scripts/app.js'
import Login from './scripts/components/login/login.js'
import MainMenu from './scripts/components/main_menu/main_menu.js'
import { Route } from 'react-router'

module.exports = (
  <Route path="/" component={App}>
    <Route path="login" component={Login}/>
    <Route path="main_menu" component={MainMenu}/>
  </Route>
);

//<Route path="*" component={NoMatch}/>