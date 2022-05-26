import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './css/App.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import Logo from './img/logo.png'
import { AuthProvicer } from './contexts/auth';
import { useState } from 'react'

function App() {

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
            <img src={Logo} width="40" height="50" class="d-inline-block align-top" alt=""/>
            </Link> 
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    SGTI 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Inscreva-se
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <AuthProvicer>
              <AppRoutes/>
            </AuthProvicer>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App