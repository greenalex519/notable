const express = require('express');
const app = express()
const router = express.Router()

import React, { component } from 'react'; //remove when components imported through app.js
import React from 'react';
import ReactDOM from 'react-dom';
//refactor into index for DRY
import NavBar from './app/components/navBar.js' //is this correct file sourcing?

router.get('/', (req, res) => res.send('home working'));

ReactDOM.render (
  <NavBar />,
  document.getElementById('root') //root or app or other?
);

module.exports = router
