import './App.css';
import reactRouterDom, { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import React, { ReactDOM } from 'react';
import { Container, Row, Col, Navbar, Form, Button, Nav } from 'react-bootstrap';
import { Client } from 'dialogflow-gateway'
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Chat from "./chat";
function App() {
  return (
    <AppBody />
  )
}

class AppBody extends React.Component {
  render() {
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
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/resources">
                <Resources />
              </Route>
            </Switch>
        </Router>
          <div className="footer">
            <div className="footer-header">
              National Suicide Prevention Lifeline:  <a className="link-footer-header link-underline" href="https://suicidepreventionlifeline.org/">  https://suicidepreventionlifeline.org/</a> or (800)-273-8255
            </div>
            <div className="footer-body">
              <div>Icons made by <a className="link-footer-body link-underline" href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a className="link-footer-body link-underline" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
              <div>Copyright ©2021</div>
            </div>

          </div>

    </Container >
    )
  }
}

class Home extends React.Component{
  constructor(props) {
    super(props);

    let uuid = uuidv4();
    this.sendMessageCustom(uuid);
    this.state = {
      currentMessage: "",
      sessionId: uuid,
      Messages: [[1, 'Hello, I am Teddy a Crisis Intervention Bot. I want to begin by saying if at any point you feel the need to speak to a human state "Text a person" or "Call a person" depending on what you prefer to do. May I get your name?'],]
    }
    this.handleChange = this.handleChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {

  }
  handleChange(event) {
    this.setState({ currentMessage: event.target.value });
  }
  sendMessage(event) {
    event.preventDefault();
    //https://teddy-gbcm.core.ushaflow.io
    let existingMessages = this.state.Messages;
    existingMessages.push([0, this.state.currentMessage]);
    this.setState({ Messages: existingMessages });
    let params = {
      "session": this.state.sessionId,
      "queryInput": {
        "text": {
          "text": this.state.currentMessage,
          "languageCode": "en"
        }
      }
    }
    this.setState({ currentMessage: "" });
    axios.post(
      "https://teddy-gbcm.core.ushaflow.io", params).then((response) => {
        console.log(response.data.queryResult.fulfillmentText);
        console.log(response);
        let existingMessages = this.state.Messages;
        existingMessages.push([1, response.data.queryResult.fulfillmentText]);
        this.setState({ Messages: existingMessages });
      });
  }
  //Custom is used for the first message so the user is greeted on page open.
  sendMessageCustom(uuid) {
    //https://teddy-gbcm.core.ushaflow.io
    let params = {
      "session": uuid,
      "queryInput": {
        "text": {
          "text": "hello",
          "languageCode": "en"
        }
      }
    }
    axios.post(
      "https://teddy-gbcm.core.ushaflow.io", params).then((response) => {
        console.log(response);
      });
  }
 render(){return(
        <Row className="no-margin" style={{ background: "#171717" }}>
          <Col xs={{ span: 8, offset: 2 }}>
            <div class="Chat-Container">
              <Chat Messages={this.state.Messages}></Chat>
              <Form style={{ display: "flex" }} onSubmit={this.sendMessage}>
                <Form.Control placeholder="Your Message" value={this.state.currentMessage} onChange={this.handleChange} />
                <Button variant="primary" type="submit">
                  Send
                </Button>
              </Form>
            </div>
          </Col>
        </Row>

  );
 }
}
function Resources() {
  return (
        <Container fluid className="resources-body">
          <Row>
            <Col xs={4}>
              <div className="resource-category">Youth</div>
            </Col>
            <Col xs={8}>
              <div className="resource-description">
                Suicide is the second leading cause of death for young people between 10 to 24. Sometimes your struggle can be underestimated because of your age. But we hear you, and help is available.
              </div>
              <div className="resources-list">
                <ul>
                  <li>You Matter: <a className="resource-link resource-link-underline" href="https://youmatter.suicidepreventionlifeline.org/">https://youmatter.suicidepreventionlifeline.org/</a></li>
                  <li>Active Minds: <a className="resource-link resource-link-underline" href="https://www.activeminds.org/">https://www.activeminds.org/</a></li>
                  <li>The Trevor Project: <a className="resource-link resource-link-underline" href="https://www.thetrevorproject.org/">https://www.thetrevorproject.org/</a></li>
                  <li>Love is Respect: <a className="resource-link resource-link-underline" href="https://www.loveisrespect.org/">https://www.loveisrespect.org/</a></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
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