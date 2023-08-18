import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import champs_1 from "../assets/img/champs_1.png";
import champs_2 from "../assets/img/champs_2.png";
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
import laugh_letter from "../assets/img/laugh_letter.png";
import chipping from "../assets/img/chipping.png";
import faces from "../assets/img/faces.png";
import grandma from "../assets/img/grandma.png";
import paintings from "../assets/img/paintings.png";
import violin_1 from "../assets/img/violin_1.png";
import dance_1 from "../assets/img/dance_1.png";
import dance_2 from "../assets/img/dance_2.png";
import vignette_1 from "../assets/img/vignette_1.png";
import vignette_2 from "../assets/img/vignette_2.png";
import vignette_3 from "../assets/img/vignette_3.png"



export const Projects = () => {
  const tech = [
    {
      title: "Crowdsourced Heritage Automation Mapping Platform for Sarawak, Malaysia (CHAMPS)",
      description: "I am developing the full front end for a cultural heritage mapping website, CHAMPS. CHAMPS aims to collect and map cultural heritage within the different communities of the Sarawak region in Malaysia, specifically within the Kuching Division. \n Users include guests and registered users, who will primarily be using CHAMPS via mobile phone. Subsequently, a heritage expert validates submitted information through their own registration portal. By cataloging both tangible and intangible cultural heritage and developing a collaborative platform, CHAMPS seeks to enable the people of Sarawak to explore and share their unique identities with the rest of the world. This website will take a step towards addressing the UNESCO Convention for the Safeguarding of Intangible Cultural Heritage and aid Sarawak’s post-COVID-19 Development Strategy. \n \n While in Sarawak as part of a transdisciplinary research team, I conducted user tests to gather feedback and improve the website so it best serves the interests of all stakeholders. I loved learning about community based design and software development, as well as about and from indigenous communities in Borneo!",
      skills: "React.js • Figma • Git • CSS • Swagger UI",
      imgArray: [champs_1],//change
      progress: in_prog,
      layout: 0,
      yt: "",
      link: "https://champsreact.azurewebsites.net/home",
      git: "https://github.com/krupacsekhar/champs",
      location: "Lead Frontend Developer"
    },
    {
      title: "Akafuba Educational Platform",
      description: "The Akafuba Educational Program is a simple, easy to understand, innovative approach to breaking barriers of stigma, fear, myths, and misconceptions surrounding health issues. As a software developer and designer on Cornell's Engineering World Health project team, I am working with a Ugandan nonprofit, Rose Academies, to develop a website-app network to be used for creating and employing interactive educational curricula on topics like Tuberculosis. Using React Native, we have finished the initial MVP of our Tuberculosis app. The program runs offline internet, featuring simple graphics and limited text as the lesson is taught in the local dialect by a Rose Uganda Fellow. We are now working on a curriculum website that allows the user to input any desired curriculum using a simple, google forms-like approach. This can then be downloaded onto the teaching tablet for convenient offline access. \n \n I particularly focused on developing our JSON file structure, integrating it into our code, and developing screens such as the app's content screen and the website's module screen. I also designed many of the curriculum website's pages. In the images to the right, the website pages are white, and app pages are pink.",
      skills: "React.js • React Native • Figma • Git",
      imgArray: [akafuba_1, akafuba_2, akafuba_3, akafuba_4, akafuba_5],//change
      progress: in_prog,
      layout: 1,
      yt: "",
      link: "",
      git: "https://github.com/krupacsekhar/EWH-app",
      location: "Software Developer & Designer"
    },
    {
      title: "Block Phantom Limb Pain",
      description: "I served as project manager for Cornell's DEBUT biomedical engineering project team. Together, we developed a novel, autonomous Phantom Limb Pain (PLP) therapy and prevention device, bPLP (Block PLP). As project manager, I organized tasks, assigned deliverables, refined our final paper, and led the team to developing a fully functioning prototype that we have submitted to the annual VentureWell DEBUT competition. \n My technical role was twofold-- data analysis, and development of our device's coding algorithm which uses angular velocity to pinpoint limb location in the walking cycle, and trigger therapeutic stimulation. Our team used python in order to graph the walking cycle to identify the particular angular velocity signals that we could use as stimuli in our coding algorithm. We then used an Arduino unit to create our device's final functional code. \n Click the link icon above to see a video explaining our device!",
      skills: "Python • Arduino (C++) • Project Management",
      imgArray: [debut_1, debut_2, debut_3, debut_4],//change
      progress: done_prog,
      layout: 0,
      link: "https://youtu.be/jHHcj_5qzLQ",
      yt: "",
      git: "https://github.com/krupacsekhar/Phantom-Limb-Sleeve",
      location: "Project Manager"
    },
  ];

  const art = [
    {
      title: "Maven",
      description: "Maven is an up-and-coming art auction organization that promotes artists using a popup gallery business model and leverages technology to better the art auction experience. As part of a design consulting organization, my team designed a website for Maven that would emphasize the artists behind the artworks, engage art-lovers, and promote Maven's gallery events. I particularly focused on designing the artist-centric pages (eg. the 'Our Artists' page). Through an iterative process of competitor research, user interviews, lo-fis, mid-fis, hi-fis, and user testing, we came up with a final design that best represented Maven's modern, minimalistic brand while centering the artists behind the artwork, and making it easy for art-lovers to find their desired information about the artworks, Maven's events, and the artists. \n Click on the pictures to view our process in a larger format.",
      skills: "Figma • User research • Competitor analysis • User testing",
      imgArray: [maven_1, maven_2, maven_3, maven_4, maven_5, maven_6, maven_7, maven_8, maven_9, maven_10],//change
      progress: done_prog,
      link: "",
      git: "",
      layout: 1,
      location: "UX Designer",
    },
    {
      title: "Sketches, Paintings, Creative Direction",
      description: "I love all kinds of art :) Here are some sketches, paintings, and photoshoots I've worked on. Some are finished, and others are works in progress. \n I love sketching and painting purely for my own enjoyment. I focus on portraiture, but am also interested in exploring architectural and interior sketches. In terms of painting, I use acrylic and have recently begun dabbling in watercolor! \n I also do Creative Direction for Cornell's CollectiveX Magazine. This involves everything from concept formulation to color palettes, to finding shoot locations and coordinating makeup, hair, and wardrobe, to live direction during the shoot. I've featured two of my shoots: 'Chipping', and 'Laugh Letter'. \n Both of these shoots are based on written pieces. 'Chipping' explores POC and female ostracization through the perspective of a sculpture in a museum. We chose cold, metallic colors to evoke the essence of 'chipping', and focused on collective gaze to emphasize ogle and elicit discomfort. 'Laugh Letter' describes a South Asian girl's journey to embracing her culture. We used warm colors, shadow-light dynamics, and levels to bring this piece to life.",
      skills: "",
      imgArray: [paintings, faces, laugh_letter, chipping],//change
      progress: in_prog,
      layout: 0,
      yt: "",
      link: "",
      git: "",
      location: ""
    },
    {
      title: "Akafuba Educational Platform",
      description: "The Akafuba Educational Program is a simple, easy to understand, innovative approach to breaking barriers of stigma, fear, myths, and misconceptions surrounding health issues. As a software developer and designer on Cornell's Engineering World Health project team, I am working with a Ugandan nonprofit, Rose Academies, to develop a website-app network to be used for creating and employing interactive educational curricula on topics like Tuberculosis. Using React Native, we have finished the initial MVP of our Tuberculosis app. The program runs offline internet, featuring simple graphics and limited text as the lesson is taught in the local dialect by a Rose Uganda Fellow. We are now working on a curriculum website that allows the user to input any desired curriculum using a simple, google forms-like approach. This can then be downloaded onto the teaching tablet for convenient offline access. \n \n I particularly focused on developing our JSON file structure, integrating it into our code, and developing screens such as the app's content screen and the website's module screen. I also designed many of the curriculum website's pages.",
      skills: "React.js • React Native • Figma • Git",
      imgArray: [akafuba_1, akafuba_2, akafuba_3],//change
      progress: in_prog,
      layout: 1,
      yt: "",
      link: "",
      git: "",
      location: "Software Developer & Designer"
    },

  ];

  const more = [
    {
      title: "Violin & Dance",
      description: "I have been playing Indian Classical violin and dancing Bharatanatyam since I was 5! \n I perform violin regularly across the United States and in India. I play solo concerts, accompany vocal artists, and play for dance programs. I play in the Carnatic style, a South Indian music form that centers around two concepts: Shruti (melody) and Laya (rhythm). Lyric-based devotional songs and melodic scales (ragas) are elaborated upon through various forms of improvisation (manodharma). These forms include Alapana, free-flowing raga exploration, Tanam, more rhythm-based swara (note) pattern improvisation, niraval, improvisation on a line of a song, and kalpana swarams, more mathematical exploration that fits into a talam (similar to a time signature). \n Bharatanatyam is one of the oldest classical dance forms of South India. It is a sacred art, performed and nurtured in the temples. Bharathanatyam has four components: Bha- Bhavam (expressions), Ra- Ragam (melody), Tha- Thalam (rhythm), and Natyam (dramatic performance). I completed my dance arangetram (roughly translated to 'graduation') in 2019, and enjoy dancing to this day. \n I have won international awards in both violin and dance. For more information about these art forms, as well as videos of my performances, click on the link icon above!",
      skills: "Performance • Improvisation • Choreography • Acting",
      imgArray: [violin_1, dance_1, dance_2],//change
      layout: 1,
      link: "https://krupacsekhar.wixsite.com/portfolio",
      progress: in_prog,
      git: "",
    },
    {
      title: "Writing",
      description: "Whether personal vignettes like the snapshots you see to the left or nonfiction writing like the health justice piece I wrote for the Cornell Healthcare Review (click the link above!), I love to write. I am in love with the English language and its power to capture, animate, persuade, inform, communicate.",
      skills: "Creative Writing • Science Writing • Journalism",
      imgArray: [vignette_1, vignette_2, vignette_3],//change
      progress: in_prog,
      layout: 0,
      yt: "",
      link: "https://www.cornellhealthcarereview.org/post/our-healthcare-system-built-to-discriminate",
      git: "",
      location: ""
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Recent Projects</h2>
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
                  <Row>
                    {
                      more.map((project, index) => {
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