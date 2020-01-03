import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Container, Row, Col} from "react-bootstrap";

import React, { Component } from "react";
import './App.css';
import "./index.css";
import {BrowserRouter, Route, Link} from "react-router-dom";
import AboutMe from "./components/aboutme.js";
import AboutMeMobile from "./components/aboutme-mobile.js";
import Portfolio from "./components/portfolio.js";
import AllWork from "./components/allwork.js";
import ContactButton from "./components/contact.js";
import { stack as Menu } from 'react-burger-menu'

class App extends Component {

  showSettings (event) {
    event.preventDefault();
    
    
    
  }

  render() {
    return (
      <BrowserRouter>
      
        <Container>
        <Menu right>
              <a id="home" className="menu-item" href="/">About Me</a>
              <a id="portfolio-button" className="menu-item" href="/portfolio">Portfolio</a>
              <a id="contact-button" className="menu-item" href="/contact">Contact Info</a>
              <a id="linkedin-button" className="menu-item" href="https://www.linkedin.com/in/scottfinlay/">LinkedIn</a>
              <a id="github-button" className="menu-item" href="https://github.com/Xisifer">GitHub</a>
              <a id="resume-button" className="menu-item" href="./components/files/Scott_Finlay_Resume.PDF">Resume</a>
            </Menu>
          <Row>
            
            <Col md={9} sm={6}>
              <div id="mainarea">
                  <Route exact path="/" component={AboutMe}/>
                  {/* <Route exact path="/mobile" component={AboutMeMobile} /> */}
                  <Route exact path="/portfolio" component={Portfolio} />
                  <Route exact path="/homework" component={AllWork} />
              </div>
            </Col>
            <Col md={3} sm={2}>



             <div id="sidecolumn">
               <Link to = "/">
                 {/* <Button className="side-button" id="aboutMeButton">About Me</Button> */}
               </Link> 
               <Link to = "/portfolio">
                 {/* <Button className="side-button" id="portfolioButton">Portfolio</Button>  */}
               </Link>
               {/* <ContactButton /> */}
               <a href = "https://www.linkedin.com/in/scottfinlay/" >
                 {/* <Button className="side-button" id="linkedinButton">LinkedIn</Button> */}
               </a>
               <a href="https://github.com/Xisifer">
                 {/* <Button className="side-button" id="githubButton">GitHub</Button> */}
               </a>
               <a href = "./components/files/Scott_Finlay_Resume.PDF">
                 {/* <Button className="side-button" id="resumeButton">My Resume</Button> */}
               </a>
               <Link to = "/homework" >
                 {/* <Button className="side-button" id="homeworkButton">Complete<br/>Assignment<br/>Listing</Button> */}
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
