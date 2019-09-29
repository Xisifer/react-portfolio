import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col, Button} from "react-bootstrap";
import React, { Component } from "react";
import './App.css';
import "./index.css";
import {BrowserRouter, Route, Link} from "react-router-dom";
import AboutMe from "./components/aboutme.js";
import Portfolio from "./components/portfolio.js";
import AllWork from "./components/allwork.js";
import ContactButton from "./components/contact.js";
import pdf from "./components/files/Scott_Finlay_Resume.PDF";


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Container>
          <Row>
            <Col md={9}>
              <div id="mainarea">
                  <Route exact path="/" component={AboutMe}/>
                  <Route exact path="/portfolio" component={Portfolio} />
                  <Route exact path="/homework" component={AllWork} />
              </div>
            </Col>
            <Col md={3}>
              <div id="sidecolumn">
                <Link to = "/">
                  <Button id="aboutMeButton">About Me</Button>
                </Link> 
                <Link to = "/portfolio">
                  <Button id="portfolioButton">Portfolio</Button> 
                </Link>
                <ContactButton />
                <Link to = {pdf} >
                  <Button id="resumeButton">My Resume</Button>
                </Link>
                <Link to = "/homework" >
                  <Button id="homeworkButton">Complete<br/>Assignment<br/>Listing</Button>
                </Link>

              </div>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>

    
    );
  }
}

export default App;
