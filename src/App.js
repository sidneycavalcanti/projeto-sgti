import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './css/App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './AppRoutes'

// authprovicer responsavel pelo contexto
import { AuthProvicer } from './contexts/auth';

function App() {

  return (
    <Router>
            <AuthProvicer>
              <AppRoutes/>
            </AuthProvicer>
    </Router>
  )
}
export default App