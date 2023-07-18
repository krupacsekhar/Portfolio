import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import champs_1 from "../assets/img/champs_1.png";
import akafuba_1 from "../assets/img/akafuba_1.png";
import akafuba_2 from "../assets/img/akafuba_2.png";
import akafuba_3 from "../assets/img/akafuba_3.png";
import akafuba_4 from "../assets/img/akafuba_4.png";
import akafuba_5 from "../assets/img/akafuba_5.png";
import projImg1 from "../assets/img/project-img1.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ProjectCard } from "./ProjectCard";
import zero_prog from '../assets/img/zero_prog.svg';
import in_prog from '../assets/img/in_prog.svg';
import done_prog from '../assets/img/done_prog.svg';
import debut_1 from "../assets/img/debut_1.png";
import debut_2 from "../assets/img/debut_2.png";
import debut_3 from "../assets/img/debut_3.png";
import debut_4 from "../assets/img/debut_4.png";
import maven_1 from "../assets/img/maven_1.png";
import maven_2 from "../assets/img/maven_2.png";
import maven_3 from "../assets/img/maven_3.png";
import maven_4 from "../assets/img/maven_4.png";
import maven_5 from "../assets/img/maven_5.png";
import maven_6 from "../assets/img/maven_6.png";
import maven_7 from "../assets/img/maven_7.png";
import maven_8 from "../assets/img/maven_8.png";
import maven_9 from "../assets/img/maven_9.png";
import maven_10 from "../assets/img/maven_10.png";



export const Projects = () => {
  const tech = [
    {
      title: "Crowdsourced Heritage Automation Mapping Platform for Sarawak (CHAMPS)",
      description: "During Summer 2023, I am developing the front end for a cultural heritage mapping website, CHAMPS. CHAMPS aims to collect and map cultural heritage within the different communities of the Sarawak region in Malaysia, specifically within the Kuching Division. By cataloging both tangible and intangible cultural heritage and developing a collaborative platform, CHAMPS seeks to enable the people of Sarawak to explore and share their unique identities with the rest of the world. This website will take a step towards addressing the UNESCO Convention for the Safeguarding of Intangible Cultural Heritage and aid Sarawak’s post-COVID-19 Development Strategy. \n \n While in Sarawak as part of a transdisciplinary research team, I will conduct user tests to gather feedback and improve the website so it best serves the interests of all stakeholders. I am excited to learn about community based design and software development, as well as about and from indigenous communities in Borneo.",
      skills: "React.js • Figma • Git • CSS • Swagger UI",
      imgArray: [champs_1],//change
      progress: in_prog,
      layout: 0,
      yt: "",
      location: "Sarawak, Malaysia"
    },
    {
      title: "Akafuba Educational Platform",
      description: "The Akafuba Educational Program is a simple, easy to understand, innovative approach to breaking barriers of stigma, fear, myths, and misconceptions surrounding health issues. As a software developer and designer on Cornell's Engineering World Health project team, I am working with a Ugandan nonprofit, Rose Academies, to develop a website-app network to be used for creating and employing interactive educational curricula on topics like Tuberculosis. Using React Native, we have finished the initial MVP of our Tuberculosis app. The program runs offline internet, featuring simple graphics and limited text as the lesson is taught in the local dialect by a Rose Uganda Fellow. We are now working on a curriculum website that allows the user to input any desired curriculum using a simple, google forms-like approach. This can then be downloaded onto the teaching tablet for convenient offline access. \n \n I particularly focused on developing our JSON files, integrating them into our code, and developing screens such as the app's content screen and the website's module screen. I also designed many of the curriculum website's pages. In the images to the right, the website pages are white, and app pages are pink.",
      skills: "React.js • React Native • Figma • Git",
      imgArray: [akafuba_1, akafuba_2, akafuba_3, akafuba_4, akafuba_5],//change
      progress: in_prog,
      layout: 1,
      yt: "",
      link: "",
      location: "Ithaca, NY"
    },
    {
      title: "Block Phantom Limb Pain",
      description: "I served as project manager for Cornell's DEBUT biomedical engineering project team. Together, we developed a novel, autonomous Phantom Limb Pain (PLP) therapy and prevention device, bPLP (Block PLP). As project manager, I organized tasks, assigned deliverables, refined our final paper, and led the team to developing a fully functioning prototype that we have submitted to the annual VentureWell DEBUT competition. \n My technical role was twofold-- data analysis, and development of our device's coding algorithm which uses angular velocity to pinpoint limb location in the walking cycle, and trigger therapeutic stimulation. Our team used python in order to graph the walking cycle to identify the particular angular velocity signals that we could use as stimuli in our coding algorithm. We then used an Arduino unit to create our device's final functional code. \n Click the link icon above to see a video explaining our device!",
      skills: "Python • Arduino (C++) • Project Management",
      imgArray: [debut_1, debut_2, debut_3, debut_4],//change
      progress: done_prog,
      layout: 0,
      link: "",
      yt: "",
      location: "Ithaca, NY"
    },
  ];

  const art = [
    {
      title: "Maven",
      description: "Maven is an up-and-coming art auction organization that promotes artists using a popup gallery business model and leverages technology to better the art auction experience. As part of a design consulting organization, my team designed a website for Maven that would emphasize the artists behind the artworks, engage art-lovers, and promote Maven's gallery events. I particularly focused on designing the artist-centric pages (eg. the 'Our Artists' page). Through an iterative process of competitor research, user interviews, lo-fis, mid-fis, hi-fis, and user testing, we came up with a final design that best represented Maven's modern, minimalistic brand while centering the artists behind the artwork, and making it easy for art-lovers to find their desired information about the artworks, Maven's events, and the artists. \n Click on the pictures to view our process in a larger format.",
      skills: "Figma • User research • Competitor analysis • User testing",
      imgArray: [maven_1, maven_2, maven_3, maven_4, maven_5, maven_6, maven_7, maven_8, maven_9, maven_10],//change
      progress: done_prog,
      layout: 1
    },
    {
      title: "Akafuba Educational Platform",
      description: "The Akafuba Educational Program is a simple, easy to understand, innovative approach to breaking barriers of stigma, fear, myths, and misconceptions surrounding health issues. As a software developer and designer on Cornell's Engineering World Health project team, I am working with a Ugandan nonprofit, Rose Academies, to develop a website-app network to be used for creating and employing interactive educational curricula on topics like Tuberculosis. Using React Native, we have finished the initial MVP of our Tuberculosis app. The program runs offline internet, featuring simple graphics and limited text as the lesson is taught in the local dialect by a Rose Uganda Fellow. We are now working on a curriculum website that allows the user to input any desired curriculum using a simple, google forms-like approach. This can then be downloaded onto the teaching tablet for convenient offline access. \n \n I particularly focused on developing our JSON files, integrating them into our code, and developing screens such as the app's content screen and the website's module screen. I also designed many of the curriculum website's pages.",
      skills: "React.js • React Native • Figma • Git",
      imgArray: [akafuba_1, akafuba_2, akafuba_3],//change
      progress: in_prog,
      layout: 0,
      yt: "",
      location: "Ithaca, NY"
    },
    {
      title: "Sketches & Paintings",
      description: "The Akafuba Educational Program is a simple, easy to understand, innovative approach to breaking barriers of stigma, fear, myths, and misconceptions surrounding health issues. As a software developer and designer on Cornell's Engineering World Health project team, I am working with a Ugandan nonprofit, Rose Academies, to develop a website-app network to be used for creating and employing interactive educational curricula on topics like Tuberculosis. Using React Native, we have finished the initial MVP of our Tuberculosis app. The program runs offline internet, featuring simple graphics and limited text as the lesson is taught in the local dialect by a Rose Uganda Fellow. We are now working on a curriculum website that allows the user to input any desired curriculum using a simple, google forms-like approach. This can then be downloaded onto the teaching tablet for convenient offline access. \n \n I particularly focused on developing our JSON files, integrating them into our code, and developing screens such as the app's content screen and the website's module screen. I also designed many of the curriculum website's pages.",
      skills: "Sketching • Painting • Simple Animation",
      imgArray: [akafuba_1, akafuba_2, akafuba_3],//change
      progress: in_prog,
      layout: 1,
      yt: "",
      location: ""
    },
  ];

  const more = [
    {
      title: "Maven",
      description: "Maven is an up-and-coming art auction organization that promotes artists using a popup gallery business model and leverages technology to better the art auction experience. As part of a design consulting organization, my team designed a website for Maven that would emphasize the artists behind the artworks, engage art-lovers, and promote Maven's gallery events. I particularly focused on designing the artist-centric pages (eg. the 'Our Artists' page). Through an iterative process of competitor research, user interviews, lo-fis, mid-fis, hi-fis, and user testing, we came up with a final design that best represented Maven's modern, minimalistic brand while centering the artists behind the artwork, and making it easy for art-lovers to find their desired information about the artworks, Maven's events, and the artists. \n Click on the pictures to view our process in a larger format.",
      skills: "Figma • User research • Competitor analysis • User testing",
      imgArray: [champs_1, champs_1],//change
      progress: done_prog,
      layout: 1
    },
    {
      title: "Akafuba Educational Platform",
      description: "The Akafuba Educational Program is a simple, easy to understand, innovative approach to breaking barriers of stigma, fear, myths, and misconceptions surrounding health issues. As a software developer and designer on Cornell's Engineering World Health project team, I am working with a Ugandan nonprofit, Rose Academies, to develop a website-app network to be used for creating and employing interactive educational curricula on topics like Tuberculosis. Using React Native, we have finished the initial MVP of our Tuberculosis app. The program runs offline internet, featuring simple graphics and limited text as the lesson is taught in the local dialect by a Rose Uganda Fellow. We are now working on a curriculum website that allows the user to input any desired curriculum using a simple, google forms-like approach. This can then be downloaded onto the teaching tablet for convenient offline access. \n \n I particularly focused on developing our JSON files, integrating them into our code, and developing screens such as the app's content screen and the website's module screen. I also designed many of the curriculum website's pages.",
      skills: "React.js • React Native • Figma • Git",
      imgArray: [akafuba_1, akafuba_2, akafuba_3],//change
      progress: in_prog,
      layout: 0,
      yt: "",
      location: "Ithaca, NY"
    },
    {
      title: "Sketches & Paintings",
      description: "The Akafuba Educational Program is a simple, easy to understand, innovative approach to breaking barriers of stigma, fear, myths, and misconceptions surrounding health issues. As a software developer and designer on Cornell's Engineering World Health project team, I am working with a Ugandan nonprofit, Rose Academies, to develop a website-app network to be used for creating and employing interactive educational curricula on topics like Tuberculosis. Using React Native, we have finished the initial MVP of our Tuberculosis app. The program runs offline internet, featuring simple graphics and limited text as the lesson is taught in the local dialect by a Rose Uganda Fellow. We are now working on a curriculum website that allows the user to input any desired curriculum using a simple, google forms-like approach. This can then be downloaded onto the teaching tablet for convenient offline access. \n \n I particularly focused on developing our JSON files, integrating them into our code, and developing screens such as the app's content screen and the website's module screen. I also designed many of the curriculum website's pages.",
      skills: "Sketching • Painting • Simple Animation",
      imgArray: [akafuba_1, akafuba_2, akafuba_3],//change
      progress: in_prog,
      layout: 1,
      yt: "",
      location: ""
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Recent Projects</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="tech">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="tech">Tech</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="arts">Art & Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="more">Writing & Performance</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="tech">
                  <div className="project-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</div>
                  <Row>
                    {
                      tech.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="arts">
                  <div className="project-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</div>
                  <Row>
                    {
                      art.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>                </Tab.Pane>
                <Tab.Pane eventKey="more">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                  <Row>
                    {
                      art.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Image"></img>
    </section>
  )
}