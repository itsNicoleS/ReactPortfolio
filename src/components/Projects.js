import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import Pcard from "./ProjectCard"; // Import the ProjectCard component
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
// import TrackVisibility from 'react-on-screen';

const projImg1 = require("../assets/img/project-img1.jpg");
const projImg2 = require("../assets/img/project-img2.png");
const projImg3 = require("../assets/img/project-img3.png");

export function Projects() {
    const projects = [
        {
            title: "Eatery App",
            description: "Basic App for conditional Menu rendering. If signed in, gives access to Secret Menu. ",
            imgUrl: projImg1,
          
        },
        {
            title: "Social Whiskers App",
            description: "Pet Adoption App that also has voting.",
            imgUrl: projImg2,
            
        },
        {
            title: "Travel Planner App",
            description: "Travel App featuring dollar conversions and weather",
            imgUrl: projImg3,
            
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Portfolio</h2>
                        These are some group projects I was involved in, each with a different
                        focus. At seperate sections in the bootcamp we were grouped up, and we
                        each had an idea for our projects, but as always it's all about
                        implementation.
                        <br />
                       <a href= "https://github.com/itsNicoleS/EATTHINGS" > EATERY APP  </a> || <a href="https://github.com/edwinalban/Social-Whiskers-Pet-Adoption"> SOCIAL WHISKERS </a> || <a href="https://github.com/efogerson1/Travel-Planner"> TRAVEL PLANNER </a>

                        <Tab.Container id="projects-tabs" defaultActiveKey="first">

                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project, index) => (
                                            <Col key={index} md={4}>
                                                <Pcard {...project} />
                                            </Col>
                                        ))}
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Background" />
        </section>
    );
};
