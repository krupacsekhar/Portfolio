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
          <Col size={12} sm={4}>
            <p>Contact me at kcs76@cornell.edu</p>
          </Col>
          <Col size={12} sm={4} className="" align-items-center>
            <p>
              I coded this website myself!{" "}
              <a
                href="https://github.com/krupacsekhar/Portfolio"
                style={{
                  color: "lightgrey",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "darkgrey";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "lightgrey";
                }}
              >
                See my code here.
              </a>
            </p>
          </Col>
          <Col size={12} sm={4} className="text-center text-sm-end">
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
