import React, { useState } from 'react'


const Forgot = () => {

  const [idtm, setIdtm] = useState("")
  const [email, setEmail] = useState("")
  
  const recuperar = (e) => {
    e.preventDefault();
  
    console.log("submit", {idtm, email});
  };

    return (
      <form onSubmit={recuperar}>
        <h3>Recuperar acesso</h3>
        <div className="mb-3">
          <label>Identidade militar</label>
          <input
            id="idtm"
            name="idtm"
            type="number"
            className="form-control"
            placeholder="Digite sua identidade"
            value={idtm}
            onChange = {(e) => setIdtm(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    )
}
export default Forgot