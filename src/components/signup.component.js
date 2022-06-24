import React, { useState } from 'react'
//import { Dropdown } from 'react-bootstrap';
//responsavel pelas requisicoes 
import axios from "axios";
//import { useAlert } from 'react-alert'
//import { response } from 'express';

import { useNavigate } from "react-router-dom";

const Signup = () => {


  const navigate  = useNavigate();
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
  const [grad, setGrad] = useState("");
  const [idtm, setIdtm] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const cadastrarUsuario =  (e) => {
    e.preventDefault()
    axios
    .post("http://localhost:5050/usuarios", 
    {
      nome,
      grad,
      idtm,
      email,
      password
    }).then((response) => { alert(response.data.alert);
      navigate("/sign-in")
      console.log(response)

    }).catch(()=>{
      alert("Usuario ja possui cadastro!")
    })
    //.then((response)=>{console.log(response);});
   //console.log('Cadastro finalizado', cadastrarUsuario);
    
  };
  /////////////////////////////////////////////////////////
 
    return (
      
    <div className="auth-wrapper">
      <div className="auth-inner">   
        <form onSubmit={cadastrarUsuario}>
          <h3>Inscreva-se</h3>
          <div className="mb-3">
          <div  alert="teste "/>
            <label>Nome de guerra</label>
            <input
              required
              id="nome"
              name="nome"
              type="text"
              className="form-control"
              placeholder="Nome de guerra"
              //metodo 1
              //onChange={handleChangeValues}
              // metodo 2 
              onChange={(e) => setNome(e.target.value)}
              
            />
          </div>
          <div className="mb-3">
            
            <label>Graduação</label>
              <select  
                required
                id="grad"
                name="grad"
                type="text" 
                value={grad} 
                className="form-control" 
                placeholder="Nome de guerra" 
                onChange={(e) => setGrad(e.target.value)}
              >
                <option  disabled></option>
                <option value="SD">SD</option>
                <option value="CB">CB</option>
                <option value="3ºSGT">3º SGT</option>
                <option value="2ºSGT">2º SGT</option>
                <option value="1ºSGT">1º SGT</option>
                <option value="SUB-TEN">SUB-TEN</option>
                <option value="ASP">ASP</option>
                <option value="2ºTEN">2º TEN</option>
                <option value="1ºTEN">1º TEN</option>
                <option value="CAP">CAP</option>
                <option value="MAJ">MAJ</option>
                <option value="TEN-CEL">TEN-CEL</option>
                <option value="CEL">CEL</option>
                <option value="GENRAL">GENERAL</option>
              </select>
          </div>
          <div className="mb-3">
            <label>Identidade militar</label>
            <input
            required
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
              required
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
              required
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
            <button  type="submit" className="btn btn-primary">
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