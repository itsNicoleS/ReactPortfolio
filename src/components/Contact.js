import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import commBubbles from "../assets/img/comm-bubbles.jpg";

export const Contact = () => {
const { status, setStatus } = useState({});
    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={commBubbles} alt="Contact Us" />

                    </Col>
                    <Col md={6}>
                        <h2> Reach Out! </h2>
                        <form action="mailto:nicolevsmith87@gmail.com">
                            <Row>
                                <Col sm={6} className="px-1">
                                    <h3><a href="">Currently Residing: Portland, OR</a></h3>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <h3><a href="">Phone: 503.929.1234.</a></h3>
                                </Col>
                                <Col sm={6} className="px-1">

                                    <h3><a href="mailto:nicolevsmith87@gmail.com">Email: email@gmail.com</a></h3>
                                </Col>
                                <Col sm={6} className="px-1">

                                    <h3><a href="">Pronouns: she/her</a></h3>

                                </Col>
                                <Col>
                                    <button type="submit"><span>Send me an email! </span> </button>
                                </Col>

                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section >
    )

}