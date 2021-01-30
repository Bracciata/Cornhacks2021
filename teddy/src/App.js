import './App.css';
import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';

function App() {
  return (
    <Container fluid className="no-padding">
      <Navbar className="navbar">
        <Navbar.Brand href="#home">
        <div className="logo">
          <img
              alt="Teddy Logo"
              src="/logo.svg"
              width="70"
              height="70"
              className="d-inline-block align-top"
            />{' '}
            Teddy
          </div>
        </Navbar.Brand>
      </Navbar>

      <Row className="no-margin">
        <Col xs={{ span: 8, offset: 2 }}>
          {/* <iframe className="iframe" allow="microphone;"></iframe> */}
          <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/baacb116-5167-4c03-b8e3-ee85a43bb82d%22%3E"></iframe>
        </Col>
      </Row>
    
      <div className="footer">
        <Row className="no-margin">
          <Col>
            hello
          </Col>
        </Row>
        <Row className="no-margin">
          <Col>
            Copyright 2021
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default App;
