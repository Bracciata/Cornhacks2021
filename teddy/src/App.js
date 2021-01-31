import './App.css';
import React, { ReactDOM } from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';

const dialogflow = require('@google-cloud/dialogflow');
const auth = require('google-auth-library');

function App() {
  return (
    <AppBody />
  )
}
let config = {
  credentials: {
    private_key: process.env.GOOGLE_API_KEY,
    client_email: "bracciata@gmail.com"
  }
}

let sessionClient = new dialogflow.SessionsClient({projectId:'teddy-gbcm', keyFilename:'teddy-gbcm-9ca06558066f.json'});

async function detectIntent(
  projectId,
  sessionId,
  query,
  contexts,
  languageCode
) {
  // The path to identify the agent that owns the created intent.
  const sessionPath = sessionClient.projectAgentSessionPath(
    projectId,
    sessionId
  );

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: query,
        languageCode: languageCode,
      },
    },
  };

  if (contexts && contexts.length > 0) {
    request.queryParams = {
      contexts: contexts,
    };
  }

  const responses = await sessionClient.detectIntent(request);
  return responses[0];
}
class AppBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sessionClient: sessionClient,
      context: undefined,
      userMessages: [],
      botMessages: [],
      botGreeting: 'Hello, I am Teddy a Crisis Intervention Bot. I want to begin by saying if at any point you feel the need to speak to a human state "Text a person" or "Call a person" depending on what you prefer to do. May I get your name?',
      botLoading: false,
      overlayStatus: '',
      timer: {
        minutes: 30,
        seconds: 0,
      }
    }
  }




  updateTimer = () => {

    this.setState({
      overlayStatus: 'active'
    })

    // var currentMinutes = this.state.timer.minutes * 60;
    // var currentSeconds = this.state.timer.seconds;

    // this.setState({
    //     timer: {
    //         minutes: currentMinutes,
    //         seconds: currentSeconds,
    //     }
    // })

    // console.log('minutes =>', minutes, 'seconds =>', seconds)


  }

  updateUserMessages = (newMessage) => {

    // Create a new array from current user messages
    var updatedUserMessagesArr = this.state.userMessages;

    // Create a new array from current bot messages
    var updatedBotMessagesArr = this.state.botMessages;

    // Render user message and bot's loading message
    this.setState({
      userMessages: updatedUserMessagesArr.concat(newMessage),
      botLoading: true,
    })

    detectIntent('teddy-gbcm','12345',newMessage,this.state.context,'en').then(data=>{
      // Send the request via fetch
      console.log('BOT RESPONSE:', data);

      // End conversation and show animation once user hits end flag in API
      /*var endConvoFlag = json.result.metadata.endConversation;
      if (endConvoFlag !== undefined || endConvoFlag === true) {
        this.updateTimer();
      }*/

    //  var botResponse = json.result.fulfillment.speech;

      // Update state with both user and bot's latest messages
      this.setState({context:data.queryResult.outputContexts})
      this.setState({
        botMessages: updatedBotMessagesArr.concat(data.queryResult.fulfillmentText),
        botLoading: false,
      })
    });

  }

  showMessages() {

    var userConvo = this.state.userMessages;

    // Show initial bot welcome message
    if (this.state.userMessages.length === 0) {
      return
    }

    var updatedConvo = userConvo.map((data, index) => {

      var botResponse = this.state.botMessages[index];

      return (
        <div className="conversation-pair" key={'convo' + index}>
          <UserBubble message={data} key={'u' + index} />
          <BotBubble message={botResponse} key={'b' + index} />
        </div>
      )
    });

    return updatedConvo;

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
          <div className="iframe-container">
            <div className="convo-container">
              <BotBubble message={this.state.botGreeting} key="bot-00" />
              {this.showMessages()}
            </div>
            <UserInput userMessage={this.state.userMessage} updateUserMessages={this.updateUserMessages} />
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

class UserBubble extends React.Component {

  render() {

    return (
      <div className="user-message-container">
        <div className="chat-bubble user">{this.props.message}</div>
      </div>
    )
  }
}


class BotBubble extends React.Component {

  componentDidMount = () => {

    var lastBubble = this.refs.chatBubble;
    lastBubble.scrollIntoView(true);
  }

  render() {

    return (
      <div className="bot-message-container">
        <div className="img-avatar-container">
          <img className="bot-avatar" src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="bot avatar" />
        </div>

        <div className="chat-bubble bot" ref="chatBubble">{this.props.message ? this.props.message : '...'}</div>
      </div>
    )
  }
}

class UserInput extends React.Component {

  handleChange = (event) => {

    if (event.key === 'Enter') {
      var userInput = event.target.value;

      // update state on parent component
      this.props.updateUserMessages(userInput);
      event.target.value = '';
    }
  }

  render() {
    return (
      <div className="input-container">
        <input id="chat" type="text" onKeyPress={this.handleChange} placeholder="type in your text to chat" />
      </div>

    )
  }
}

export default App;