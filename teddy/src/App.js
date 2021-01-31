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
    let deleteEle = document.getElementById('top-head-subtitle');
    console.log(deleteEle);
    var checkExist = setInterval(function() {
      if( document.getElementById('chatbox')) {
         console.log("Exists!");
         var checkExistTwo = setInterval(function() {
          if( document.getElementById('chatbox')) {
             console.log("Exists!");
             clearInterval(checkExistTwo);
          }else{
            console.log('Does not exist');
          }
       }, 500);
         clearInterval(checkExist);
      }else{
        console.log('Does not exist');
      }
   }, 500);
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

      <Row className="no-margin" style={{background:"#171717"}}>
        <Col xs={{ span: 8, offset: 2 }}>
        <embed id="chatbox" src="https://teddy-gbcm.web.ushaflow.io/" style={{width:"100%", height: "100%"}}/>

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