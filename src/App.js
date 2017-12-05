import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import './App.scss'
import 'bulma/css/bulma.css'

import routes from './routes'

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="container">
            <div className="header-title">XXX娛樂</div>
            <div className="tab-container">
              <Link className="button is-primary tab" to="/">首頁</Link>
              <Link className="button is-primary tab" to="/lottery">投注頁</Link>
            </div>
          </div>
        </header>
        <div className="content-container container">
          <Switch>
            {routes.map(route => (
              <Route key={route.path} { ...route } />
            ))}
          </Switch>
        </div>
        <footer className="footer">2015 XX娛樂, Topone 執行運營, Curacuo 政府牌照</footer>
      </div>
    )

  }
}

export default App
