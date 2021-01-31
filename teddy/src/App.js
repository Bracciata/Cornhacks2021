import './App.css';
import React, { ReactDOM } from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import axios from "axios";
import Messages from "./Messages";

const dialogflow = require('@google-cloud/dialogflow');
const auth = require('google-auth-library');

function App() {
  return (
    <AppBody />
  )
}


class AppBody extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      responses:[],
      currentMessage: ""
    }
  }

   handleMessageSubmit( message) {
    const data = {
      message
    };

    axios
      .post("YOUR_BACKEND_URL", data)
      .then(response => {
        const responseData = {
          text: response.data["message"]["fulfillmentText"] != "" ? response.data["message"]["fulfillmentText"] : "Sorry, I can't get it. Can you please repeat once?",
          isBot: true
        };

        this.setState({responses:responses => [...responses, responseData]});
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  };

   handleMessageChange(event) {
    this.sestState({currentMessage:event.target.value});
  };

   handleSubmit( event) {
    const message = {
      text: this.state.currentMessage,
      isBot: false
    };
    if (event.key == "Enter") {
      this.sestState({response:responses => [...responses, message]});
      this.handleMessageSubmit(message.text);
      this.setState({currentMessage:""});
    }
    
  };

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
        <div className="chatSection">
      <div className="botContainer">
        <div className="messagesContainer">
          <Messages messages={this.state.responses} />
        </div>

        {/*The input section is 👇*/}
        <div className="inputSection">
          <input
            type="text"
            value={this.state.currentMessage}
            onChange={this.handleMessageChange}
            onKeyDown={this.handleSubmit}
            placeholder="Say something..."
            className="messageInputField"
          />
        </div>
      </div>
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