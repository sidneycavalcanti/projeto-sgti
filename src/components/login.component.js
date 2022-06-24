import React, { useState, useContext } from 'react'
import { AuthContext } from '../contexts/auth'
import Logo from '../img/logo.png'
import { BrowserRouter  as Router, Link } from 'react-router-dom';
//import * as yup from "yup"; // validacao no react
//import axios from "axios";
  
    const LoginPage = () => {

     const { authenticated, login } = useContext (AuthContext);

      const [idtm, setIdtm] = useState("")
      const [password, setPassword] = useState("")
      
      //enviar dados para logar no sistema
      const logar = (e) => {
        e.preventDefault()
       // console.log("submit", {idtm, password});
        /*
        axios
        .post("http://localhost:5050/login", 
        {
          idtm,
          password
        }).then((response)=>{console.log(response);});
        */
        login(idtm, password);  // interacao com o meu contexto / api
       
    
      };


      // enviar dados do usuario para logar no sistema
      /*const logar = (e) => {
        
        e.preventDefault();
        console.log("submit", {idtm, password});

       login(idtm, password); // interacao com o meu contexto / api
      };
      
      */

     // funcao para pegar informacoes do html atrves do botao 
     //const handleClickButton = () =>{
     //  console.log(idtm, password)
     //}
      
    return (
      <div className="App">  
        <div className="auth-wrapper">
          <div className="auth-inner">  
      <form onSubmit={logar} /*validationSchema={validationLogin} */>
         <div class="col-md-12 text-center">
          <Link className="" to={'/sign-in'}>
            <img src={Logo} className="logo" width="30%" height="50%" display="" class="" alt=""/>
          </Link>
          </div>
          <br></br>
        <h1>SGTI</h1>

        <div className="mb-3">
          <label htmlFor='Identidade'>Identidade militar</label>
          <input
            required
            id="idtm"
            name="idtm"
            type="number"
            className="form-control"
            placeholder="Digite sua identidade"
            value={idtm}
            onChange={(e) => setIdtm(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Senha</label>
          <input
            required
            id="password"
            name="password"
            type="password"
            className="form-control"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Lembre-me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button /*onClick={()=> handleClickButton()}*/ type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
        <p className="forgot-password text-right">
          Esqueceu a senha?<br></br> 
          <a href="/forgot">Recuperar senha</a>
        </p>
        <p className="forgot-password text-right">
          Ainda nao possui cadastro?<br></br>
                   <a href="/sign-up">Inscreva-se!</a>
        </p>
      </form>
      </div>
        </div>
      </div>
    )
  }

  export default LoginPage

