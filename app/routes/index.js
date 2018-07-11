const express = require('express');
const app = express()
const router = express.Router()

import React from 'react';
import ReactDOM from 'react-dom';

router.get('/', (req, res) => res.send('home working'));

module.exports = router
