import './App.css';
import React, { ReactDOM } from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';

function App() {
  return (
    <AppBody />
  )
}


class AppBody extends React.Component {

  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;

    document.body.appendChild(script);
  }


  render() {
    return (<Container fluid className="no-padding">
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

<df-messenger
  chat-icon="https:&#x2F;&#x2F;storage.googleapis.com&#x2F;cloudprod-apiai&#x2F;93bdf5de-e0ef-4bb3-8570-5977c2802a6a_x.png"
  intent="WELCOME"
  chat-title="Teddy"
  agent-id="baacb116-5167-4c03-b8e3-ee85a43bb82d"
  language-code="en"
></df-messenger>

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

    </Container >
    )
  }
}

export default App;