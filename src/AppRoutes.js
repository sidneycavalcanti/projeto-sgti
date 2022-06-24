import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './components/login.component';
import SignUp from './components/signup.component';
import Forgot from './components/forgot.component';
import Home from './components/home.component';
import React, { useContext } from 'react';

// importando o auth.js onde tem as funcoes de login e etc
import { AuthContext, AuthProvicer } from './contexts/auth';

//import HomePage from './components/home.component'


const AppRoutes = () => {

        //funcao de autenticacao
        const Private =({children})=> {
                const { authenticated, loading } = useContext(AuthContext);
                if(loading){
                        return <div className="loading">Carregando...</div>
                }
                //se nao tiver autenticado ele manda para login
                if(!authenticated) {
                        return< Navigate to="/" />;
                }
                // se estiver autenticado ele manda para children
                return children;
        };
  // <AuthContext.Provider value={{authenticated: user, login }}> </AuthContext.Provider>
    return (
    <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/forgot" element={<Forgot />} />
            {/*Tudo que estiver com private vai verificar se esta autenticado*/}
            <Route exact path="/home-page" element={<Private><Home /></Private>} />
    </Routes>)
   
}



export default AppRoutes;