import React, { useState, useContext } from 'react'
import { AuthContext } from '../contexts/auth'
  
    const LoginPage = () => {

     const { authenticated, login } = useContext (AuthContext);

      const [idtm, setIdtm] = useState("")
      const [password, setPassword] = useState("")
      
      // enviar dados do usuario para logar no sistema
      const logar = (e) => {
        e.preventDefault();
        console.log("submit", {idtm, password});

       login(idtm, password); // interacao com o meu contexto / api
      };
    return (
      <form onSubmit={logar}>
        <h3>Entrar</h3>
       <p>{String(authenticated)}</p>
        <div className="mb-3">
          <label htmlFor='Identidade'>Identidade militar</label>
          <input
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
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
        <p className="forgot-password text-right">
          Esqueceu a <a href="/forgot">senha?</a>
        </p>
      </form>
    )
  }

  export default LoginPage

