import './App.css';
import React, { ReactDOM } from 'react';
import { Container, Row, Col, Navbar, Form, Button } from 'react-bootstrap';
import { Client } from 'dialogflow-gateway'
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Chat from "./chat";
function App() {
  return (
    <AppBody />
  )
}
function sendMessage(session, query) {
  //https://teddy-gbcm.core.ushaflow.io
  let params = {
    "session": session,
    "queryInput": {
      "text": {
        "text": query,
        "languageCode": "en"
      }
    }
  }
  axios.post(
    "https://teddy-gbcm.core.ushaflow.io", params).then((response) => {
      console.log(response);
    });
}
sendMessage('sess', 'hello');
class AppBody extends React.Component {

  constructor(props) {
    super(props);

    let uuid = uuidv4();
    sendMessage(uuid,'hello');
    this.state = {
      sessionId: uuid,
      Messages: [[1,'Hello, I am Teddy a Crisis Intervention Bot. I want to begin by saying if at any point you feel the need to speak to a human state "Text a person" or "Call a person" depending on what you prefer to do. May I get your name?'],]
    }
  }

  componentDidMount() {

  }
  sendMessage(){

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

      <Row className="no-margin" style={{ background: "#171717" }}>
        <Col xs={{ span: 8, offset: 2 }}>
          <div class="Chat-Container">
<Chat Messages={this.state.Messages}></Chat>
<Form style={{display:"flex"}}>
<Form.Control  placeholder="Your Message" />
<Button variant="primary" type="submit">
    Send
  </Button>
</Form>
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

    </Container >
    )
  }
}

export default App;