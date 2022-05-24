import React, { useState } from 'react'

const Signup = () => {

  const [nome, setNome] = useState("");
  const [guerra, setGuerra] = useState("");
  const [idtm, setIdtm] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function cadastrarUsuario(e) {
    e.preventDefault()
    console.log('Cadastro finalizado', {nome, guerra, idtm, email, password})
  } 
    return (
      <form onSubmit={cadastrarUsuario}>
        <h3>Inscreva-se</h3>
        <div className="mb-3">
          <label>Nome completo</label>
          <input
            id="nome"
            name="nome"
            type="text"
            className="form-control"
            placeholder="Nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Nome de guerra</label>
          <input 
          id="guerra"
          name="guerra"
          type="text" 
          className="form-control" 
          placeholder="Nome de guerra" 
          value={guerra}
          onChange={(e) => setGuerra(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Identidade militar</label>
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
          <label>E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            placeholder="Digite seu email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
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
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Cadastrar
          </button>
        </div>
        <p className="forgot-password text-right">
          ja registrado<a href="/sign-in">entrar?</a>
        </p>
      </form>
    )

}
export default Signup