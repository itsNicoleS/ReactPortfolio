import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import space_mermaid from "../assets/img/space_mermaid.png";
import { useState, useEffect } from 'react';

export const Banner = () => {
    const [loopNum, setloopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["React Master", "CSS Learner", "Code Copier"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) };
    }, [text, delta, loopNum, isDeleting]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setloopNum(loopNum + 1);
            setDelta(500);
        }

    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="open">Welcome to my Page</span>
                        <h1> {`Hi I'm Nicole V. Smith `}
                            <br></br>
                            <span className="wrap"> {text} </span></h1>
                        <p> I've spent the last eight years translating complex topics
                            from an array of clients as a barber. But in that time,
                            I've realized that what really drives me is the user's
                            experience. It's the lightbulb moment behind my career
                            change to UX design. I believe I'll make a strong
                            addition to your team because my work has largely
                            put the user front and center, and now I'm interested
                            in focusing on a different facet of that goal.</p>

                        <button onClick={() => {
                            window.open("mailto:nicolevsmith87@gmail.com");
                        }}> Let's Connect
                            <ArrowRightCircle size={25} />
                        </button>

                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        <img src={space_mermaid} alt="Header Img" />
                    </Col>

                </Row>
            </Container>

        </section>
    )

}