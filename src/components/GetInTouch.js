import { Container, Row, Col } from "react-bootstrap";

import gmailIcon from "../assets/img/gmail.svg";
import outlookIcon from "../assets/img/outlook.svg";
import yahooIcon from "../assets/img/yahoo.svg";


const email = "krupacsekhar@gmail.com";

const mailServices = [
  { name: "Gmail", url: `https://mail.google.com/mail/?view=cm&to=${email}`, icon: gmailIcon },
  { name: "Outlook", url: `https://outlook.live.com/owa/?path=/mail/action/compose&to=${email}`, icon: outlookIcon },
  { name: "Yahoo", url: `https://compose.mail.yahoo.com/?to=${email}`, icon: yahooIcon },
];

export const GetInTouch = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <div style={{ height: '1rem' }} /> {/* spacer */}
        <Row className="align-items-center">
          <Col md={2}></Col>
          <Col md={4}>
            <h2 style={{ fontWeight: 700, color: "#fff" }}>Get in touch!</h2>
            <p style={{ color: "#B8B8B8", marginTop: "10px" }}>
              Choose your preferred email service to send a message.
            </p>
          </Col>
          <Col
            md={4}
            className="d-flex flex-wrap gap-3 justify-content-md-end mt-3 mt-md-0"
          >
            <div className="mail-icon">
              {mailServices.map(({ name, url, icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="email-icon-button"
                  title={`Email via ${name}`}
                >
                  <img src={icon} style={{ height: 46, width: 46 }} alt={`${name} icon`} />
                </a>
              ))}
            </div>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>

    </section>
  );
};
