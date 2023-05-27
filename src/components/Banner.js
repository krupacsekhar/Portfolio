import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg';
import { useState, useEffect } from "react";
import Nav from 'react-bootstrap/Nav';


export const Banner = () => {
    const [activeLink, setActiveLink] = useState('home');
    const onUpdateActiveLink = () => {
        setActiveLink("skills");
    }
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["software developer!", "artist!", "designer!"]
    const [text, setText] = useState('');
    const period = 1000; //how much time passess between letters being typed out
    const [delta, setDelta] = useState(300 - Math.random() * 300);
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };

    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 1.5)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(200);
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>{"Hi! I'm Krupa, "}<span className="wrap">{text}</span></h1>
                        <p>About me.........</p>
                        <button onClick={() => onUpdateActiveLink('skills')}
                        ><Nav.Link href="#skills" onClick={() => onUpdateActiveLink('skills')}>Let's go!</Nav.Link><ArrowRightCircle size={25} /></button>

                    </Col>
                    <Col xs={12} md={6} xl={5}><img src={headerImg} alt="Header Img" /></Col>
                </Row>
            </Container>
        </section>
    )
}