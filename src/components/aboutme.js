import React, { Component } from "react";


class AboutMe extends Component {
    render() {
        return (
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
                </div>
        )
    }
}
export default AboutMe;