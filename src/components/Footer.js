import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import gitIcon from '../assets/img/giticon.svg';
import cvIcon from '../assets/img/cv_icon.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <p>Contact me at kcs76@cornell.edu</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}