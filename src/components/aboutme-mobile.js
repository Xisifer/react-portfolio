import React, { Component } from "react";
import {Container} from "react-bootstrap";


class AboutMeMobile extends Component {
    render() {
        return (
            <Container>

                    <div id="aboutMe">
                        <div id="portrait">
                            <img src="https://i.imgur.com/Qn08T7j.jpg" alt="My Portrait" />
                        </div>
                        {/* <div id="nameplate"> */}
                            <h1>Scott Finlay</h1>
                        {/* </div> */}
                        <div id="biography">
                            <p>Hello!</p>
                            <p>I am a Full-Stack junior Web Developer with a solid grasp of both front-end and back-end design, and a strong background in software Quality Assurance. Currently based in Austin, Texas, I am passionate about perfection and experienced in collaborating with others, including different disciplines and specialties, to deliver the highest possible quality product for the end user experience. </p>
                            <p>I'm skilled at working under tight deadlines and in changing quickly to adapt to rapidly-developing, Live Environment situations. Excited to implement my background in Quality Assurance to help cooperate between departments and teams, I keep the public-facing result of our work as a top priority during all stages of development.</p>
                            <div id="skills">
                            <p>Key Skills:</p>
                                <ul>
                                    <li>
                                        React
                                    </li>
                                    <li>
                                        MySQL / Sequelize
                                    </li>
                                    <li>
                                        Google Firebase
                                    </li>
                                    <li>
                                        HTML / CSS
                                    </li>
                                    <li>
                                        jQuery
                                    </li>
                                    <li>
                                        Bootstrap
                                    </li>
                                    <li>
                                        JavaScript
                                    </li>
                                        <ul>
                                            <li>
                                            Node.JS / Express.JS
                                            </li>
                                            Libraries:
                                            <li>
                                            Moment.JS
                                            </li>
                                            <li>
                                            Cheerio.JS
                                            </li>
                                        </ul>
                                    <li>
                                        MongoDB / Mongoose
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </div>
          
        </Container>
        )
    }
}
export default AboutMeMobile;