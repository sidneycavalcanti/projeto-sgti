import React, { Component } from 'react'
export default class Forgot extends Component {
  render() {
    return (
      <form>
        <h3>Recuperar acesso</h3>
        <div className="mb-3">
          <label>Identidade militar</label>
          <input
            type="number"
            className="form-control"
            placeholder="Digite sua identidade"
          />
        </div>
        <div className="mb-3">
          <label>E-mail de recuperacao</label>
          <input
            type="email"
            className="form-control"
            placeholder="E-mail"
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
}