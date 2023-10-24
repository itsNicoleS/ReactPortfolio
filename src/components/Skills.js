import 'react-multi-carousel/lib/styles.css';

import { Container, Row, Col } from "react-bootstrap";

import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import res from "../assets/CVresume/nicole_smith.pdf";

export const SkillRide = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>

                            <p> In order to familiarize myself with the
                                tools and processes used in data analysis,
                                I completed the University of Oregon Web
                                Programming Bootcamp, which taught me
                                SQL and React, and trained me to clean
                                and visualize data. Thanks to this
                                preparation, I feel confident that
                                I will make a strong addition to
                                your team from the very start. </p>
        <a href={res}> Download My Resume/CV.  </a>
                        </div>
                    </Col>
                    <Col>
                        <div className="skill-bx mySkills">
                            *  React
                            <br />
                            *  MySQL
                            <br />
                            *  github
                            <br />
                            *  C L I
                            <br />
                            *  Node.js
                            <br />
                            *  MVC layouts
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}