import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap";
import React, { Component } from "react";
// import logo from './logo.svg';
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
                THIS IS A COLUMN 10 UNITS WIDE
                <div id="HELLOS">
                  <p>HELLO WORLD</p>
                  <p>HELLO WORLD</p>
                  <p>HELLO WORLD</p>
                  <p>HELLO WORLD</p>
                  <p>HELLO WORLD</p>
                </div>
              </div>

            </Col>
            <Col md={2}>
              <div id="sidecolumn">
                THIS IS A COLUMN 2 UNITS WIDE
              </div>
            </Col>
          </Row>
        </Container>
         <Menubar/>

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
      </React.Fragment>

    
    );
  }
}

export default App;
