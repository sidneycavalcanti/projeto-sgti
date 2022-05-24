import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login.component'
import SignUp from './components/signup.component'
import Forgot from './components/forgot.component'
import Home from './components/home.component'
import { AuthContext } from './contexts/auth';
import { useState } from 'react'


const AppRoutes = () => {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        console.log("login", { email, password});
        setUser({id: "123", email});

    // user == null
    // authenticated = false

    }
    const logout = () => {
        console.log ("logout")
    }

    return (
    <Routes>
        <AuthContext.Provider value={{authenticated: user, login }}>
        <Route exact path="/" element={<Login />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot" element={<Forgot />} />\
        <Route path="/home-page" element={<Home />} />
        </AuthContext.Provider>
    </Routes>)
}



export default AppRoutes;