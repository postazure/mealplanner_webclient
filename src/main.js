import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import Routes from './routes.js'


ReactDOM.render((
  <Router>
    {Routes}
  </Router>
  ),
  root
);