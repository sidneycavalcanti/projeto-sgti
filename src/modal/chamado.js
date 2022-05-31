import { BrowserRouter as Router, Link } from 'react-router-dom'
const Chamado = ({ onClose = () => {}, Children }) => {

return (
  <div className="App"> 
<div className="auth-wrapper" >
        <div className="auth-inner">
        <form /*onSubmit={logar}*/>
         <div class=" col-md-12 text-center">
          </div>
          <br></br>
        <h3>Registrar abertura de chamado</h3>
        <div className="mb-3">
          <label htmlFor='Identidade'>Identidade militar</label>
          <input
            id="idtm"
            name="idtm"
            type="number"
            className="form-control"
            placeholder="Digite sua identidade"
            //value={idtm}
            //onChange={(e) => setIdtm(e.target.value)}
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
            //value={password}
            //onChange={(e) => setPassword(e.target.value)}
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
        <br></br>
        
        
      </form>
        <div className="d-grid" >
          <button type="submit" className="btn btn-danger" onClick={onClose} >
            fechar
          </button>
        </div>
        </div>
      </div>
      </div>
      
)
}

export default Chamado;
