import React, { useState, useContext } from 'react';
// todos tem de ter o Router - nao tirar 
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { AuthContext } from '../contexts/auth'
import Logo from '../img/logo.png';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form, Container, Row, Col } from 'react-bootstrap';




    const HomePage = () => {

      // modal exemplo 
      const [show1, setShow1] = useState(false);
      const [show2, setShow2] = useState(false);

      const Esconder1 = () => setShow1(false);
      const Mostrar1 = () => setShow1(true);
      const Esconder2 = () => setShow2(false);
      const Mostrar2 = () => setShow2(true);
      // fim modal exemplo

      //recupero logaut 
      const { logout } = useContext (AuthContext);

      // chamo o logout aqui 
      const logoff = () => {
        //console.log("submit", {logout});

        logout();
      };

      // tornar algo visivel e nao visivel 
    /* 
    const [isModalVisible1, setisModalVisible1] = useState(false)
    const [isModalVisible2, setisModalVisible2] = useState(false)
    */
  
    return (
      // modal exemple
      <div className="App">   
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={'/sign-in'}>
          <img src={Logo} width="40" height="50" class="d-inline-block align-top" alt=""/>
          </Link> 
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  Sistema de gerenciamento de tecnoligia da informacão
              </li>
            </ul>
          </div>
          {/* aqui o botao de sair chamado a funcao logoff */}
            <button type="button" className="btn btn-danger" onClick={logoff}> Sair </button>
        </div>
      </nav>
      <div className='container'>
      {/* ClassName imagem vem do css index.css */}
        <div className='imagem'> 
          <div className="auth-wrapper" >
              
              <div class="col-md-12 text-center">
                  {/*botao abertura de chamado*/}
                    <button type="button"  className="btn btn-danger" onClick={Mostrar1}>
                       Abrir Chamado 
                    </button>
                  
              {/* <button type="submit" className=""> Salvar </button> */}
              {/* botao para torna algo visivel externo visivel dentro da pagina
                <button type="button" className="btn btn-danger" onClick={() => setisModalVisible1(true)}> Abri Chamado </button>
                {isModalVisible1 ? (
                <Chamado onClose={() => { setisModalVisible1(false) }}>  </Chamado>
                )
                : null} */}

                </div>
                <br></br>
                <div class="col-md-12 text-center">
                  {/*botao acompanhar chamado*/}
                  <button type="button"  className="btn btn-primary" onClick={Mostrar2}>
                       Acompanhar Chamdo
                  </button>
                </div>
              </div>
            </div>
          </div> 
             {/* Modal de abertura de chamado */}
            <Modal show={show1} onHide={Esconder1}>
              <Modal.Header closeButton>
                <Modal.Title>ABRIR CHAMADO</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
              </Modal.Body>
              
              <Modal.Footer>
                <Button variant="secondary" onClick={Esconder1}>
                  Close
                </Button>
                <Button variant="primary" onClick={Esconder1}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>

              {/* Modal de acompanhamento de chamado */}
              <Modal show={show2} onHide={Esconder2}>
              <Modal.Header closeButton>
                <Modal.Title>ACOMPANHAR CHAMADO</Modal.Title>
              </Modal.Header>
              <Modal.Body className="show-grid">
                <Container>
                  <Row>
                    <Col xs={12} md={8}>
                      .col-xs-12 .col-md-8
                    </Col>
                    <Col xs={6} md={4}>
                      .col-xs-6 .col-md-4
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={6} md={4}>
                      .col-xs-6 .col-md-4
                    </Col>
                    <Col xs={6} md={4}>
                      .col-xs-6 .col-md-4
                    </Col>
                    <Col xs={6} md={4}>
                      .col-xs-6 .col-md-4
                    </Col>
                  </Row>
                </Container>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={Esconder2}>
                  Close
                </Button>
                <Button variant="primary" onClick={Esconder2}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
              </div> 
        
  )
}

export default HomePage;

