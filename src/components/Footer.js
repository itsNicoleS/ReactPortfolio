import { Col, Container, Row } from "react-bootstrap"

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';




export const Footer = () => {
    return (
        <footer className="footer" >
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        NVS Portfolio OCT 2023
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">

                            <a href="https://www.linkedin.com/in/nicole-smith-3b083b24a"><img src={navIcon1} /></a>
                            <a href="https://www.github.com/itsNicoleS"><img src={navIcon2} /></a>


                        </div>
                        <p>CopyRight 2023 All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer >
    )
} 