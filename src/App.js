import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/css/bootstrap.min.css";
import {ButtonToolbar, Container, Row, Col, OverlayTrigger, Button, Popover} from "react-bootstrap";
import React, { Component } from "react";
import './App.css';
import "./index.css";
import Menubar from "./components/sidebar.js";
import WorkCard from "./components/workcards.js";
import assignments from "./components/assignments.json";


class App extends Component {
  state = {
    assignments:assignments
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col md={10}>
            <div id="mainarea">

                <div id="aboutMe">
                  <div id="portrait">
                    <img src="https://i.imgur.com/Qn08T7j.jpg" alt="My Portrait" />
                  </div>
                  <div id="biography">
                    <p id="nameplate">Scott Finlay</p>
                    <p>Hello!</p>
                    <p>I am a Full-Stack junior Web Developer with a solid grasp of both front-end and back-end design, and a strong background in software Quality Assurance. Currently based in Austin, Texas, I am passionate about perfection and experienced in collaborating with others, including different disciplines and specialties, to deliver the highest possible quality product for the end user experience. </p>
                    <p>I'm skilled at working under tight deadlines and in changing quickly to adapt to rapidly-developing, Live Environment situations. Excited to implement my background in Quality Assurance to help cooperate between departments and teams, I keep the public-facing result of our work as a top priority during all stages of development.</p>
                    <p>Key Skills:</p>
                    <ul>
                      <li>
                        HTML / css
                      </li>
                      <li>
                        JavaScript
                      </li>
                      <ul>
                        <li>
                          Node.JS
                        </li>
                        <li>
                          Moment.js
                        </li>
                        <li>
                          Cheerio.JS
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>
                <div id="cardarea">
                  {this.state.assignments.map(assignment => (
                    <WorkCard 
                    key={assignment.id}
                    id={assignment.id}
                    title={assignment.title}
                    description={assignment.description}
                    image={assignment.image}
                    github={assignment.github}
                    livepage={assignment.livepage}
                    />
                  ))}
                </div>
              </div>

            </Col>
            <Col md={2}>
              <div id="sidecolumn">              
              <ButtonToolbar>
                {['left'].map(placement => (
                  <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                      <Popover id={`popover-positioned-${placement}`}>
                        <Popover.Title as="h3">Contact Info</Popover.Title>
                        <Popover.Content>
                          <strong>Email:</strong> example@gmail.com
                        </Popover.Content>
                      </Popover>
                    }
                  >
                    <Button variant="secondary">Contact Info</Button>
                  </OverlayTrigger>
                ))}
              </ButtonToolbar>
              </div>
            </Col>
          </Row>
        </Container>
         <Menubar/>


      </React.Fragment>

    
    );
  }
}

export default App;
