import './App.css';
import React,{useEffect} from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';

function App() {
  useEffect(() => {
    (function(d, m){
      var kommunicateSettings = 
          {"appId":"2a31e1417de82755606bcd6c32ac2d4ad","popupWidget":true,"automaticChatOpenOnNavigation":true};
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      window.kommunicate = m; m._globals = kommunicateSettings;
  })(document, window.kommunicate || {});
  }, []);
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
            <div className="logo-text">Teddy</div>
          </div>
        </Navbar.Brand>
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
          National Suicide Prevention Lifeline: <a className="link link-underline" href="https://suicidepreventionlifeline.org/">https://suicidepreventionlifeline.org/</a> or (800)-273-8255
        </div>
        <div className="footer-body">
          <div>Icons made by <a className="link-underline" href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a className="link-underline" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          <div>Copyright ©2021</div>
        </div>
      </div>
    </Container>
    
  );
}

export default App;
