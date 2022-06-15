import React, { useState } from 'react'

//responsavel pelas requisicoes 
import axios from "axios";



const Signup = () => {

  //metodo 1
  // todas as variaves em um unico objeto 
  /*const [values, setValues] = useState();

  //funcao para pegar todos os valores  em um unico objeto
    const handleChangeValues = value => {
      setValues(prevValue=>({
        ...prevValue,
        [value.target.nome]: value.target.value,
      }))
    };

    const cad = () => {
      Axios.post("http://localhost:3001/register", {
        nome: values.nome,
        guerra: values.guerra,
        idtm: values.idtm,
        email: values.email,
        password: values.password
      }).then((response)=>{
        console.log(response);
      });
    } */
    //////////////////////////////////////////////////////

  //metodo 2
  //cada variavel para cada objeto
  const [nome, setNome] = useState("");
  const [guerra, setGuerra] = useState("");
  const [idtm, setIdtm] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const cadastrarUsuario =  (e) => {
    e.preventDefault()
    axios
    .post("http://localhost:5050/usuarios", 
    {
      nome,
      guerra,
      idtm,
      email,
      password
    })
    .then((response)=>{console.log(response);});
   //console.log('Cadastro finalizado', cadastrarUsuario);
  };
  /////////////////////////////////////////////////////////
 
  
    return (
    <div className="auth-wrapper">
      <div className="auth-inner">   
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
              //metodo 1
              //onChange={handleChangeValues}
              // metodo 2 
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
            //metodo 1
            //onChange={handleChangeValues}
            // metodo 2 
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
            //metodo 1
            //onChange={handleChangeValues}
            // metodo 2 
            onChange={(e) => setIdtm(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>E-mail</label>
            <input
              className="form-erro"
              id="email"
              name="email"
              type="email"
              class="form-control"
              placeholder="Digite seu email"
              value={email}
              //metodo 1
              //onChange={handleChangeValues}
              // metodo 2 
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
              //metodo 1
              //onChange={handleChangeValues}
              // metodo 2 
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Cadastrar
            </button>
          </div>
          <p className="forgot-password text-right">
            ja registrado <a href="/sign-in">entrar?</a>
          </p>
        </form>
      </div>
    </div>  
    )

}
export default Signup