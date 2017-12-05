import './index.scss'
import { BrowserRouter as Router } from 'react-router-dom'

import React from 'react'
import { render } from 'react-dom'

import App from './App'

const Root = () => (
  <Router>
    <App />
  </Router>
)

render(<Root />, document.querySelector('#app'))
