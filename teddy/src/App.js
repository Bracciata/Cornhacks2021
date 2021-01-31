import './App.css';
import reactRouterDom, { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import React, { ReactDOM } from 'react';
import { Container, Row, Col, Navbar, Form, Button, Nav } from 'react-bootstrap';
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
              <div className="resource-category">Addiction</div>
            </Col>
            <Col xs={8}>
              <div className="resource-description">
                When you’re stuck in the cycle of addiction, recovery can seem out of reach. But no matter how powerless you feel, change is possible with the right treatment, coping strategies, and support. Don’t give up, even if you’ve tried and failed before.
              </div>
              <div className="resources-list">
                <ul>
                  <li>Substance Abuse and Mental Health Services Administration: <a className="resource-link resource-link-underline" href="https://www.samhsa.gov/find-help/national-helpline">https://www.samhsa.gov/find-help/national-helpline</a></li>
                  <li>HelpGuide: <a className="resource-link resource-link-underline" href="https://www.helpguide.org/home-pages/addictions.htm">https://www.helpguide.org/home-pages/addictions.htm</a></li>
                </ul>
              </div>
            </Col>
          </Row>
          
          <Row>
            <Col xs={4}>
              <div className="resource-category">Attempt Survivors</div>
            </Col>
            <Col xs={8}>
              <div className="resource-description">
                Coping with the deep hurt after surviving a suicide attempt and finding hope is possible. The Lifeline is available for support, 24/7.
              </div>
              <div className="resources-list">
                <ul>
                  <li>Lifeline for Attempt Survivors: <a className="resource-link resource-link-underline" href="https://lifelineforattemptsurvivors.org/">https://lifelineforattemptsurvivors.org/</a></li>
                  <li>A Journey Toward Health and Hope: Your Handbook for Recovery Ater a Suicide Attempt: <a className="resource-link resource-link-underline" href="https://store.samhsa.gov/product/A-Journey-Toward-Health-and-Hope-Your-Handbook-for-Recovery-After-a-Suicide-Attempt/SMA15-4419">https://store.samhsa.gov/product/A-Journey-Toward-Health-and-Hope-Your-Handbook-for-Recovery-After-a-Suicide-Attempt/SMA15-4419</a></li>
                  <li>American Association of Suicidology: <a className="resource-link resource-link-underline" href="https://suicidology.org/">https://suicidology.org/</a></li>
                </ul>
              </div>
            </Col>
          </Row>
          
          <Row>
            <Col xs={4}>
              <div className="resource-category">Disabilities</div>
            </Col>
            <Col xs={8}>
              <div className="resource-description">
                Life can be hard sometimes, and this is even more true for people living with disabilities. Young people with disabilities face bullying, youth and adults with disabilities can be forced into nursing facilities, and plenty of people and businesses still discriminate against us every day. Whether you were born with your disability, your disability has slowly progressed as you grew older, or you suddenly acquired your disability, the challenges you face are real. But you can get through them!
              </div>
              <div className="resources-list">
                <ul>
                  <li>The Live On Movement: <a className="resource-link resource-link-underline" href="http://liveon.net/">http://liveon.net/</a></li>
                  <li>Financial Assistance and Support Services for People with Disabilities: <a className="resource-link resource-link-underline" href="https://www.usa.gov/disability-financial-support">https://www.usa.gov/disability-financial-support</a></li>
                  <li>The American Association of People with Disabilities: <a className="resource-link resource-link-underline" href="https://www.aapd.com/">https://www.aapd.com/</a></li>
                </ul>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={4}>
              <div className="resource-category">Disaster Survivors</div>
            </Col>
            <Col xs={8}>
              <div className="resource-description">
                The road to emotional recovery after a natural or human-caused disaster can be long, but you’re not alone.
              </div>
              <div className="resources-list">
                <ul>
                  <li>Disaster Distress Helpline: <a className="resource-link resource-link-underline" href="https://www.samhsa.gov/find-help/disaster-distress-helpline">https://www.samhsa.gov/find-help/disaster-distress-helpline</a></li>
                  <li>American Red Cross Recovery Guides: <a className="resource-link resource-link-underline" href="https://www.redcross.org/get-help/disaster-relief-and-recovery-services.html">https://www.redcross.org/get-help/disaster-relief-and-recovery-services.html</a></li>
                  <li>Ready.gov: Coping with Disaster: <a className="resource-link resource-link-underline" href="https://www.ready.gov/coping-disaster">https://www.ready.gov/coping-disaster</a></li>
                </ul>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={4}>
              <div className="resource-category"> Homelessness</div>
            </Col>
            <Col xs={8}>
              <div className="resource-description">
                The definition of homelessness means not having a home. You don't have to be living on the street to be homeless - even if you have a roof over your head you can still be without a home. This may be because you don't have any rights to stay where you live or your home is unsuitable for you.
              </div>
              <div className="resources-list">
                <ul>
                  <li>2-1-1: <a className="resource-link resource-link-underline" href="https://www.211.org/">https://www.211.org/</a></li>
                  <li>National Homeless: <a className="resource-link resource-link-underline" href="http://nationalhomeless.org/references/need-help/">http://nationalhomeless.org/references/need-help/</a></li>
                  <li>Local Food Banks: <a className="resource-link resource-link-underline" href="https://www.feedingamerica.org/find-your-local-foodbank">https://www.feedingamerica.org/find-your-local-foodbank</a></li>
                </ul>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={4}>
              <div className="resource-category">LGBTQ+</div>
            </Col>
            <Col xs={8}>
              <div className="resource-description">
                The LGBTQ+ community is diverse and strong but maybe disproportionately at-risk for suicidal feelings and other mental health struggles because of the discrimination and prejudice they too often are up against. This section has information and resources for yourself and to help support loved ones who are LGBTQ+.
              </div>
              <div className="resources-list">
                <ul>
                  <li>Planned Parenthood: Sexuality Info and Resources: <a className="resource-link resource-link-underline" href="https://www.plannedparenthood.org/learn">https://www.plannedparenthood.org/learn</a></li>
                  <li>GLAAD: An Ally’s Guide to Terminology: <a className="resource-link resource-link-underline" href="https://www.glaad.org/publications/talkingabout/terminology">https://www.glaad.org/publications/talkingabout/terminology</a></li>
                  <li>You Matter: How to Be A Straight Ally: <a className="resource-link resource-link-underline" href="https://youmatter.suicidepreventionlifeline.org/how-to-be-an-ally/">https://youmatter.suicidepreventionlifeline.org/how-to-be-an-ally/</a></li>
                  <li>It Gets Better Project: Hope for LGBT Youth: <a className="resource-link resource-link-underline" href="https://itgetsbetter.org/">https://itgetsbetter.org/</a></li>
                </ul>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={4}>
              <div className="resource-category">Loss Survivors</div>
            </Col>
            <Col xs={8}>
              <div className="resource-description">
                If you have lost a loved one to suicide, you are not alone. There are resources available to help survivors of suicide loss cope.
              </div>
              <div className="resources-list">
                <ul>
                  <li>After A Suicide Resource Directory: <a className="resource-link resource-link-underline" href="http://www.personalgriefcoach.net/">http://www.personalgriefcoach.net/</a></li>
                  <li>What to Tell a Children After A Suicide: <a className="resource-link resource-link-underline" href="https://save.org/what-we-do/grief-support/">https://save.org/what-we-do/grief-support/</a></li>
                  <li>I’ve Lost Someone: <a className="resource-link resource-link-underline" href="https://afsp.org/ive-lost-someone">https://afsp.org/ive-lost-someone</a></li>
                  <li>Survivors of Suicide: Helping a Survivor Heal: <a className="resource-link resource-link-underline" href="http://www.survivorsofsuicide.com/help_heal.shtml">http://www.survivorsofsuicide.com/help_heal.shtml</a></li>
                </ul>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={4}>
              <div className="resource-category">Native Americans</div>
            </Col>
            <Col xs={8}>
              <div className="resource-description">
                Depression and suicide affect people of all ages and populations, but Native American and Alaskan Native populations can be at a higher risk. If you’re struggling, the Lifeline is available to help, 24/7.
              </div>
              <div className="resources-list">
                <ul>
                  <li>Suicide Prevention: Indian Health Service: <a className="resource-link resource-link-underline" href="https://www.ihs.gov/suicideprevention/">https://www.ihs.gov/suicideprevention/</a></li>
                  <li>We R Native: <a className="resource-link resource-link-underline" href="https://www.wernative.org/articles/wanting-to-end-your-life">https://www.wernative.org/articles/wanting-to-end-your-life</a></li>
                  <li>Center for Native American Youth at the Aspen Institute: <a className="resource-link resource-link-underline" href="https://www.aspeninstitute.org/programs/center-for-native-american-youth/">https://www.aspeninstitute.org/programs/center-for-native-american-youth/</a></li>
                </ul>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={4}>
              <div className="resource-category">PTSD</div>
            </Col>
            <Col xs={8}>
              <div className="resource-description">
                PTSD is a mental health problem that some people develop after experiencing or witnessing a life-threatening event, like combat, a natural disaster, a car accident, or sexual assault. It's normal to have upsetting memories, feel on edge, or have trouble sleeping after this type of event. If symptoms last more than a few months, it may be PTSD. The good news is that there are effective treatments.
              </div>
              <div className="resources-list">
                <ul>
                  <li>U.S Department of Veterans Affairs: <a className="resource-link resource-link-underline" href="https://www.ptsd.va.gov/index.asp">https://www.ptsd.va.gov/index.asp</a></li>
                  <li>Anxiety and Depression Association of America: <a className="resource-link resource-link-underline" href="https://www.wernatie.org/articles/wanting-to-end-your-life">https://www.wernative.org/articles/wanting-to-end-your-life</a></li>
                </ul>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={4}>
              <div className="resource-category">Veterans</div>
            </Col>
            <Col xs={8}>
              <div className="resource-description">
                For veterans, crises can be heightened by their experiences during military service. If you’re a veteran or service member and in crisis, these resources can help.
              </div>
              <div className="resources-list">
                <ul>
                  <li>Veterans Crisis Line: <a className="resource-link resource-link-underline" href="https://www.veteranscrisisline.net/">https://www.veteranscrisisline.net/</a></li>
                  <li>Make the Connection: <a className="resource-link resource-link-underline" href="https://www.maketheconnection.net/family-friends">https://www.maketheconnection.net/family-friends</a></li>
                </ul>
              </div>
            </Col>
          </Row>

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