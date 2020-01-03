import React, { Component } from "react";
import {Container} from "react-bootstrap";


class AboutMe extends Component {
    render() {
        return (
            <Container>

                    <div id="aboutMe">
                        <div id="portrait">
                            <img src="https://i.imgur.com/Qn08T7j.jpg" alt="My Portrait" />
                        </div>
                        {/* <div id="nameplate"> */}
                            
                        {/* </div> */}
                        <div id="biography">
                        <h1>Scott Finlay</h1>
                            <p>Hello!</p>
                            <p>I am a full-stack junior web developer with a solid grasp of both front-end and back-end design, and a strong background in software quality assurance. I've worked for 8 years in the video game industry on globally recognized IPs such as Halo and DC Comics, and I've had experience in live user environments supporting over 300,000 daily players. </p>
                                
                               <p> Currently based in Austin, Texas, I am experienced in working closely with other developers and teams, including different disciplines and specialties, to deliver the highest possible quality product for the end user experience. In my previous career, QA is the last line of development before content goes out the door, and that responsibility comes with an attention to detail that I'm proud to bring to all aspects of my work. </p>

                            <p>

                            </p>


                            {/* <p>I'm skilled at working under tight deadlines and in changing quickly to adapt to rapidly-developing, live environment situations. Excited to implement my background in Quality Assurance to help cooperate between departments and teams, I keep the public-facing result of our work as a top priority during all stages of development.</p> */}
                            <div id="skills">
                            <p>Key Skills:</p>
                                <ul>
                                    <li>
                                        React
                                    </li>
                                    <li>
                                        HTML / CSS
                                    </li>

                                    <li>
                                        Bootstrap
                                    </li>

                                    <li>
                                        MySQL / Sequelize
                                    </li>
                                    <li>
                                        Google Firebase
                                    </li>

                                    <li>
                                        JavaScript
                                    </li>
                                        <ul>

                                            <li>
                                            Node.JS / Express.JS
                                            </li>
                                            <li>
                                            Moment.JS
                                            </li>
                                            <li>
                                            Cheerio.JS
                                            </li>
                                            <li>
                                                jQuery
                                            </li>
                                        </ul>
                                    <li>
                                        MongoDB / Mongoose
                                    </li>
                                    <li>
                                        NPM
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </div>
          
        </Container>
        )
    }
}
export default AboutMe;