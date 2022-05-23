import React, { useState } from 'react'
  
    const Login = () => {
      const [idtm, setIdtm] = useState("")
      const [password, setPassword] = useState("")
      
      const handleSubmit = (e) => {
        e.preventDefault();
      
        console.log("submit");
      }
    return (
      <form>
        <h3>Entrar</h3>
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

  export default Login
