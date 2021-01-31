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
          <iframe
            id="myiFrame"
            allow="microphone;"
            width="100%"
            height="450" // need to make this take up the remainer of the vertical screen space
            src="https://console.dialogflow.com/api-client/demo/embedded/baacb116-5167-4c03-b8e3-ee85a43bb82d">
          </iframe>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
