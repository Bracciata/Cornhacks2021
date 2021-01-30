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
          <iframe width="100%" height="78vh" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/baacb116-5167-4c03-b8e3-ee85a43bb82d"></iframe>
        </Col>
      </Row>
    
      <div className="footer">
        <div className="footer-header">
          National Suicide Prevention Lifeline: <a className="link" href="https://suicidepreventionlifeline.org/">https://suicidepreventionlifeline.org/</a> or (800)-273-8255
        </div>
        <div className="footer-body">
          <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          <div>Copyright ©2021</div>
        </div>
      </div>
    </Container>
  );
}

export default App;
