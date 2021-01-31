import './App.css';
import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <Container fluid className="no-padding">
      <Navbar className="navbar">
        <Navbar.Brand className="full-width" href="#home">
          <div className="logo">
            <img
                alt="Teddy Logo"
                src="/logo.svg"
                width="70"
                height="70"
                className="d-inline-block align-top"
              />{' '}
            <div className="logo-text">Teddy</div>
          </div>
        </Navbar.Brand>

        <Nav className="ml-auto">
          <Nav.Link className="nav-option" href="#home">Resources</Nav.Link>
          <Nav.Link className="nav-option" href="#features">About</Nav.Link>
        </Nav>
            

      </Navbar>

      <Row className="no-margin">
        <Col xs={{ span: 8, offset: 2 }}>
          <div className="iframe-container">
            <iframe width="100%" height="100%" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/baacb116-5167-4c03-b8e3-ee85a43bb82d"></iframe>
          </div>
        </Col>
      </Row>
    
      <div className="footer">
        <div className="footer-header">
          National Suicide Prevention Lifeline: <a className="link-footer-header link-underline" href="https://suicidepreventionlifeline.org/">https://suicidepreventionlifeline.org/</a> or (800)-273-8255
        </div>
        <div className="footer-body">
          <div>Icons made by <a className="link-footer-body link-underline" href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a className="link-footer-body link-underline" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          <div>Copyright ©2021</div>
        </div>
      </div>
    </Container>
  );
}

export default App;
