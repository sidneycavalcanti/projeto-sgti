import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login.component'
import SignUp from './components/signup.component'
import Forgot from './components/forgot.component'
import Home from './components/home.component'
import { AuthProvicer } from './contexts/auth';
import { useState } from 'react'


const AppRoutes = () => {
 //<AuthContext.Provider value={{authenticated: user, login }}> </AuthContext.Provider>
    return (
    <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/home-page" element={<Home />} />
    </Routes>)
   
}



export default AppRoutes;