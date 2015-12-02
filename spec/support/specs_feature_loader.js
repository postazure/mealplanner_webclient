import React from 'react'
import ReactDOM from 'react-dom'
import Routes from '../../src/routes.js'
import { Router } from 'react-router'

window.app = function (renderToNode) {
  ReactDOM.render((<Router>{Routes}</Router>), renderToNode)
};
