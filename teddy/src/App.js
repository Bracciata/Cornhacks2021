import './App.css';
import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';

function App() {
  return (
    <Container fluid>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt="Teddy Logo"
            src="./logo.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{' '}
          Teddy
        </Navbar.Brand>
      </Navbar>
      <Row>
        <Col>
          <iframe
            allow="microphone;"
            width="350"
            height="430"
            border="1px solid black"
            src="https://console.dialogflow.com/api-client/demo/embedded/baacb116-5167-4c03-b8e3-ee85a43bb82d%22%3E">
          </iframe>
        </Col>
      </Row>
    </Container>
  );
}

export default App;