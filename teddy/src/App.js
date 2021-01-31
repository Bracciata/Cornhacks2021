import './App.css';
import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Container fluid className="no-padding">
      <Router>
      <Navbar className="navbar">
        <Navbar.Brand className="full-width" href="/">
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
            <Link to="/about" className="nav-option">About</Link>
            <Link to="/resources" className="nav-option">Resources</Link>
          </Nav>
      </Navbar>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/resources">
            <Resources/>
          </Route>
        </Switch>
      </Router>
    
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

function Home(){
  return(
    <Row className="no-margin">
        <Col xs={{ span: 8, offset: 2 }}>
          <div className="iframe-container">
            <iframe width="100%" height="100%" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/baacb116-5167-4c03-b8e3-ee85a43bb82d"></iframe>
          </div>
        </Col>
      </Row>
  );
}
function Resources() {
  return (
    <div>
      <h2>TEsts</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>TEstsdsdsdsdsds</h2>
    </div>
  );
}

export default App;