import React, { Component } from "react";
import WorkCard from "./workcards.js";

import assignments from "./allassignments.json";


class AllWork extends Component {
    state = {
      assignments:assignments
    };
  
    render() {
      return (
        <React.Fragment>
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
                    livelabel={assignment.livelabel}
                    />
                ))}
            </div>
        </React.Fragment>
      )
    }
}
export default AllWork;