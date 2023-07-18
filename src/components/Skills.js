import { Container, Row, Col, Carousel } from "react-bootstrap";
import meter1 from "../assets/img/progress.svg";
import meter2 from "../assets/img/meter1.svg";
import soft_skills from "../assets/img/soft_skills.svg";
import hard_skills from "../assets/img/hard_skills.svg";
import colorSharp from "../assets/img/color-sharp.png";
import back from "../assets/img/skill_back.png";


export const Skills = () => {
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
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>
                Skills
              </h2>
              <h3>
                -
              </h3>

              <Row className="align-items-center">
                <div class="col-xs-6 col-sm-6">
                  <img src={hard_skills} style={{ height: 50, width: 50 }} alt="Hard Skills" />
                  <h5> </h5>
                  <h5>Hard Skills</h5>
                  <p1>Ocaml • Python • R • Java • CSS • JavaScript (React & React Native) • C++ • Figma • Git</p1>
                </div>
                <div class="col-xs-6 col-sm-6">
                  <img src={soft_skills} style={{ height: 50, width: 40 }} alt="Soft Skills" />
                  <h5> </h5>
                  <h5>Soft Skills</h5>
                  <p1>Writing • Public Speaking • Project Management • Adaptability • Creativity • Problem Solving</p1>
                </div>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={back} alt="Image" />
    </section>
  )
}