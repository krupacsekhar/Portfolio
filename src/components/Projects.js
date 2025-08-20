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
import blank_prog from '../assets/img/blank_prog.png';
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
import vignette_3 from "../assets/img/vignette_3.png";
import among_final from "../assets/img/amongfinal.png"
import sketch_1 from "../assets/img/sketch_1.jpg";
import sketch_2 from "../assets/img/sketch_2.jpg";
import sketch_3 from "../assets/img/sketch_3.jpg";
import sketch_4 from "../assets/img/sketch_4.jpg";
import them1 from "../assets/img/them1.JPG";
import them2 from "../assets/img/them2.JPG";
import them3 from "../assets/img/them3.JPG";
import them4 from "../assets/img/them4.jpg";
import them5 from "../assets/img/them5.jpg";
import them6 from "../assets/img/them6.jpg";
import writing_1 from "../assets/img/writing1.png";
import writing_2 from "../assets/img/writing2.png";
import writing_3 from "../assets/img/writing_3.png";
import script from "../assets/img/script.png";
import ode from "../assets/img/ode.png";
import thekrupa from "../assets/img/thekrupa.mp4"
import train from "../assets/img/train.mp4"
import digiDrawing1 from "../assets/img/digiDrawing1.png"
import digiDrawing2 from "../assets/img/digiDrawing2.png"
import digiDrawing3 from "../assets/img/digiDrawing3.png"
import digiDrawing4 from "../assets/img/digiDrawing4.png"
import digiDrawing5 from "../assets/img/digiDrawing5.png"
import digiDrawing6 from "../assets/img/digiDrawing6.png"
import digiDrawing7 from "../assets/img/digiDrawing7.png"
import digiDrawing8 from "../assets/img/digiDrawing8.png"
import harp_and_firefly from "../assets/img/harp_and_firefly.mp4"
import endless_chase from "../assets/img/endless_chase.mp4"
import jdragon from "../assets/img/jdragonwalkthrough.mp4"
import bworld_moodboard from "../assets/img/bworld_moodboard.png"
import bworld1 from "../assets/img/bworld/1.png"
import bworld2 from "../assets/img/bworld/2.png"
import bworld3 from "../assets/img/bworld/3.png"
import bworld4 from "../assets/img/bworld/4.png"
import bworld5 from "../assets/img/bworld/5.png"
import bworld6 from "../assets/img/bworld/6.png"
import bworld7 from "../assets/img/bworld/7.png"
import bworld8 from "../assets/img/bworld/8.png"
import bworld9 from "../assets/img/bworld/9.png"
import bworld10 from "../assets/img/bworld/10.png"
import bworld11 from "../assets/img/bworld/11.png"
import bworld12 from "../assets/img/bworld/12.png"





export const Projects = () => {
  const tech = [
    {
      title: "Maven",
      description: "Maven is an up-and-coming art auction organization that promotes artists using a popup gallery business model and leverages technology to better the art auction experience. As part of a design consulting organization, my team designed a website for Maven that would emphasize the artists behind the artworks, engage art-lovers, and promote Maven's gallery events. I particularly focused on designing the artist-centric pages (eg. the 'Our Artists' page). Through an iterative process of competitor research, user interviews, lo-fis, mid-fis, hi-fis, and user testing, we came up with a final design that best represented Maven's modern, minimalistic brand while centering the artists behind the artwork, and making it easy for art-lovers to find their desired information about the artworks, Maven's events, and the artists. \n Click on the pictures to view our process in a larger format.",
      skills: "Figma • User research • Competitor analysis • User testing",
      imgArray: [maven_1, maven_2, maven_3, maven_4, maven_5, maven_6, maven_7, maven_8, maven_9, maven_10],//change
      progress: blank_prog,
      link: "",
      git: "",
      layout: 1,
      location: "UX Designer",
    },
    {
      title: "Crowdsourced Heritage Automation Mapping Platform for Sarawak, Malaysia (CHAMPS)",
      description: "I developed the full front end for the first iteration of a Sarawakian cultural heritage website, CHAMPS. CHAMPS aims to collect and map cultural heritage within the different communities of the Sarawak region in Malaysia, specifically within the Kuching Division. \n Users include guests and registered users, who will primarily be using CHAMPS via mobile phone. Subsequently, a heritage expert validates submitted information through their own registration portal. By cataloging both tangible and intangible cultural heritage and developing a collaborative platform, CHAMPS seeks to enable the people of Sarawak to explore and share their unique identities with the rest of the world. This website will take a step towards addressing the UNESCO Convention for the Safeguarding of Intangible Cultural Heritage and aid Sarawak’s post-COVID-19 Development Strategy. \n \n While in Sarawak as part of a transdisciplinary research team, I conducted user tests to gather feedback and improve the website so it best serves the interests of all stakeholders. I loved learning about community based design and software development, as well as about and from indigenous communities in Borneo!",
      skills: "React.js • Figma • Git • CSS • Swagger UI",
      imgArray: [champs_1],//change
      progress: blank_prog,
      layout: 0,
      yt: "",
      link: ["https://www.champs.com.my/"],
      git: "https://github.com/krupacsekhar/champs",
      location: "Lead Frontend Developer"
    },
    {
      title: "Akafuba Educational Platform",
      description: "The Akafuba Educational Program is a simple, easy to understand, innovative approach to breaking barriers of stigma, fear, myths, and misconceptions surrounding health issues. As a software developer and designer on Cornell's Engineering World Health project team, I am working with a Ugandan nonprofit, Rose Academies, to develop a website-app system to be used for creating and employing interactive educational curricula on topics like Tuberculosis. Using React Native, we have finished the initial MVP of our Tuberculosis app. The program runs offline internet, featuring simple graphics and limited text as the lesson is taught in the local dialect by a Rose Uganda Fellow. We are now working on a curriculum website that allows the user to input any desired curriculum using a simple, google forms-like approach. This can then be downloaded onto the teaching tablet for convenient offline access. \n \n I particularly focused on developing our JSON file structure, integrating it into our code, and developing screens such as the app's content screen and the website's module screen. I also designed many of the curriculum website's pages. In the images to the right, the website pages are white, and app pages are pink.",
      skills: "React.js • React Native • Figma • Git",
      imgArray: [akafuba_1, akafuba_2, akafuba_3, akafuba_4, akafuba_5],//change
      progress: blank_prog,
      layout: 1,
      yt: "",
      link: "",
      git: "https://github.com/krupacsekhar/EWH-app",
      location: "Software Developer & Designer"
    },
    {
      title: "Ray Tracer",
      description: "As part of my Computer Graphics class, I, along with a partner, implemented a fully functioning ray tracer in Python using Jupyter Notebook. In particular, we implemented a cylinder primitive and accurate intersection functionality, Constructive Solid Geometry (with union, intersection, and difference functions), and multi-core processing using the Pathos library. Using our CSG class, we created pill shapes (a cylinder with spheres as its bases), and used this shape to create each Among Us charecter. We subsequently manipulated the light and material settings in order to create optimal composition. Here is our final render!",
      skills: "React.js • React Native • Figma • Git",
      imgArray: [among_final],//change
      progress: blank_prog,
      layout: 0,
      yt: "",
      link: "",
      git: "https://github.com/krupacsekhar/EWH-app",
      location: "Software Developer"
    },
    {
      title: "Block Phantom Limb Pain",
      description: "I served as project manager for Cornell's DEBUT biomedical engineering project team. Together, we developed a novel, autonomous Phantom Limb Pain (PLP) therapy and prevention device, bPLP (Block PLP). As project manager, I organized tasks, assigned deliverables, refined our final paper, and led the team to developing a fully functioning prototype that we have submitted to the annual VentureWell DEBUT competition. \n My technical role was twofold-- data analysis, and development of our device's coding algorithm which uses angular velocity to pinpoint limb location in the walking cycle, and trigger therapeutic stimulation. Our team used python in order to graph the walking cycle to identify the particular angular velocity signals that we could use as stimuli in our coding algorithm. We then used an Arduino unit to create our device's final functional code. \n Click the link icon above to see a video explaining our device!",
      skills: "Python • Arduino (C++) • Project Management",
      imgArray: [debut_1, debut_2, debut_3, debut_4],//change
      progress: blank_prog,
      layout: 1,
      link: ["https://youtu.be/jHHcj_5qzLQ"],
      yt: "",
      git: "https://github.com/krupacsekhar/Phantom-Limb-Sleeve",
      location: "Project Manager"
    },
  ];

  const art = [
    {
      title: "Fine Arts",
      description: "My artistic practice spans a range of fine arts—sculpture, painting, and drawing—though my primary focus lies in acrylic painting and pencil work. I am particularly drawn to portraiture and architectural subjects, approaching each with distinct intentions. \nMy architectural drawings are a form of life drawing, capturing everyday slices of life that resonate with me—quiet streets, lived-in spaces, and fleeting moments—rendered with the aim of preserving their subtle textures and atmospheres. In contrast, my portraiture emerges from imagination, allowing me to explore characters and moods unconstrained by direct observation. \nWhether imagined or observed, each piece becomes an inquiry into how form, texture, and perspective can hold memory, convey narrative, and evoke emotional depth.\n To explore more of my work, visit my Instagram via the link icon above.",
      imgArray: [sketch_1, sketch_3, paintings, sketch_4, faces],//change
      progress: blank_prog,
      layout: 1,
      yt: "",
      link: "https://www.instagram.com/world_._builder/",
      git: "",
      location: ""
    },
    {
      title: "Digital Art & Animation",
      description: "In the digital realm, I work primarily in Procreate, crafting portraits and small-scale animations that bridge my fine arts practice with the boundless possibilities of digital media. This platform allows me to experiment across a spectrum of rendering styles, from subtle, lifelike realism to bold, stylized abstraction, while maintaining the hand-drawn essence at the heart of my practice. Through deliberate layering, nuanced textures, and carefully orchestrated motion, I seek to create works that are both visually arresting and narratively rich, evoking emotion through expression, gesture, and a considered use of color. \nMy artistic focus centers on portraiture, with a particular fascination for imagining characters from diverse, intimate worlds. Each piece becomes an exploration of identity, personality, and expression through visual form. \n To explore more of my work, visit my Instagram via the link icon above.",
      skills: "",
      imgArray: [thekrupa, digiDrawing1, train, digiDrawing2, digiDrawing3, digiDrawing4, digiDrawing5, digiDrawing6, digiDrawing7, digiDrawing8],
      progress: blank_prog,
      layout: 0,
      yt: "",
      link: "https://www.instagram.com/world_._builder/",
      git: "",
      location: ""
    },
    {
      title: "Music Composition",
      description: "Although my musical training is in the Indian Classical (Carnatic) style, I am in love with Western-style film scoring. I compose music that illustrates stories and captures emotion. \nThe first piece, 'Endless Chase', opens in fragile, tentative steps before swelling into tangled harmonies that press in from all sides. Threads of wonder and nostalgia flicker through the density midway through the piece, only to dissolve into an unresolved cadence, leaving the ear suspended in lingering tangled harmonies. \nThe second piece, 'The Harp and the Firefly', weaves the soundscape of a playful fairytale world. It opens with a delicate layering of chords, joined by the gentle resonance of the harp. Soon, the flute enters, weaving fluid, playful motifs that lend the piece a sense of curiosity, eventually swelling into harmonies that evoke a sense of wonder.",
      skills: "",
      imgArray: [harp_and_firefly, endless_chase],//change
      progress: blank_prog,
      layout: 1,
      yt: "",
      link: "",
      git: "",
      location: ""
    },
    {
      title: "Violin & Dance",
      description: "I have been playing Indian Classical violin and dancing Bharatanatyam since the age of five, earning international recognition in both art forms. \nAs a violinist, I perform in the Carnatic tradition across the United States and in India, both as a soloist and accompanist. I am a member of the award-winning musical ensemble Akshara and have performed at renowned venues including the National Gallery of Art, Lincoln Center, and Carnegie Hall. My adaptability allows me to seamlessly accompany vocalists and dancers nationwide, tailoring my approach to each performance. Carnatic music, rooted in the South Indian concepts of Shruti (melody) and Laya (rhythm), invites improvisation through forms such as Alapana (free raga exploration), Tanam (rhythmic swara patterns), Niraval (melodic improvisation on a lyrical line), and Kalpana Swaras (mathematical note patterns set to a talam, or rhythmic cycle). \n Bharatanatyam is a sacred South Indian classical dance form with the components of Bhavam (expression), Ragam (melody), Thalam (rhythm), and Natyam (dramatic storytelling). I trained extensively since the age of 5 and completed my Bharatanatyam Arangetram ('graduation') in 2019. In addition to classical repertoire, I adapt the storytelling and expressive techniques of Bharatanatyam to acting in plays and thematic productions.\nFor more information about these art forms, as well as videos of my performances, click the link icon above.",
      skills: "Performance • Improvisation • Choreography • Acting",
      imgArray: [violin_1, dance_1, dance_2],//change
      layout: 0,
      link: ["https://krupacsekhar.wixsite.com/portfolio"],
      progress: blank_prog,
      git: "",
    }
  ];

  const design = [
    {
      title: "THEM: an immersive film installation",
      description: "I was set designer for a Cornell immersive film installation: THEM. The installation is comprised of a room and a two-paneled projection in the center of the space. \nThis set had to be used both for the filming process, and as a live set that visitors could interact with while watching the films. In addition, the set had to be versatile enough to accomodate four distinct short films, with diverse characters and moods (middle aged bachelors, a young couple, best friends in an argument). \nAfter reading the scripts, I recognized common themes of home, nostalgia, and companionship, and chose a warm, earthy color palette and soft, lived-in furniture. We sourced all furniture and props from the Ithaca reuse center, and used paneling and wallpaper to make the space feel lived-in. Our final installation manifested as a needed reprieve from the monotony of university life, allowing visitors to experience the film as if they were living it.",
      skills: "",
      imgArray: [them1, them2, them3, them4, them5, them6],//change
      progress: blank_prog,
      layout: 0,
      yt: "",
      link: "",
      git: "",
      location: "Lead Set Designer"
    },
    {
      title: "The Jasmine Dragon",
      description: "Inspired by 'Avatar: The Last Airbender,' this project reimagines The Jasmine Dragon, Uncle Iroh’s beloved tea shop in the Earth Kingdom, through the lens of sustainable and culturally grounded design. Iroh’s philosophy of harmony, hospitality, and reflection informs every aspect of this redesign, transforming the space into a sustainable tea shop, café, and vibrant third place that welcomes people from all walks of life. \n The concept draws from my independent study on traditional Chinese architecture, complemented by my current studies in Chinese culture and visual heritage in Beijing. Every element of the design is grounded in research, from spatial layout and materiality to symbolic detailing. This vision balances historical architectural motifs with contemporary functionality, using nature-inspired materials, adaptive reuse strategies, and thoughtful spatial zoning to create an atmosphere of warmth and connection. \nFor a more engaging, in-depth look at my design rationale, material choices, and cultural references, click the link icons above. For a concise visual overview, expand the video on the right.",
      skills: "",
      imgArray: [jdragon],//change
      progress: blank_prog,
      layout: 1,
      yt: "",
      link: ["https://www.instagram.com/reel/DGRiOSQN75v/?utm_source=ig_web_copy_link&igsh=enQ0Y205bmtzZWVu", "https://www.instagram.com/reel/DHo7We5uVp7/?utm_source=ig_web_copy_link&igsh=MWxoM3dmdDBwNjZjNw=="],
      git: "",
      location: "Concept Designer"
    },
    {
      title: "Creative Direction",
      description: "I served as Shoot Lead for Cornell's CollectiveX Magazine. This involved everything from concept formulation to color palettes, to finding shoot locations and coordinating makeup, hair, and wardrobe, to live direction during the shoot. I've featured two of my shoots: 'Chipping', and 'Laugh Letter'. \n Both of these shoots are based on written pieces. 'Chipping' explores POC and female ostracization through the perspective of a sculpture in a museum. We chose cold, metallic colors to evoke the essence of 'chipping', and focused on collective gaze to emphasize ogle and elicit discomfort. 'Laugh Letter' describes a South Asian girl's journey to embracing her culture. We used warm colors, shadow-light dynamics, and levels to bring this piece to life.",
      skills: "Project Management",
      imgArray: [laugh_letter, chipping],//change
      progress: blank_prog,
      layout: 0,
      yt: "",
      link: "",
      git: "",
      location: ""
    },
    {
      title: "Bonsai World",
      description: "Bonsai World is a conceptual design exercise that reimagines elements of traditional Asian heritage—its spatial philosophies, craft traditions, and symbolic forms—through the lens of speculative architecture. The project envisions a miniaturized human society living in symbiosis with monumental bonsai ecosystems: living architectures that merge organic growth with built form, fusing centuries-old horticultural practice with innovative ecological design. Miniaturization reduces environmental strain, while the architecture itself becomes a living organism—responsive, adaptive, and deeply tied to its cultural lineage. \n The design draws inspiration from classical Chinese architecture, Japanese bonsai cultivation, and Indian root engineering, reinterpreting these traditions to fit a speculative future set in the year 2503 under the governance of the United Governments of Asia.  \nFormally, the work explores the politics of scale, the poetics of craft, and the evolving dialogue between tradition and innovation. Rather than offering a utopian or dystopian vision, Bonsai World presents an ambiguous, layered narrative that invites reflection: What does ecological harmony demand at a continental scale? Who bears the costs of such integration, and who decides? \nFor my full artist’s statement or to view the project in booklet format, click the link icons above.",
      skills: "",
      imgArray: [bworld_moodboard, bworld1, bworld2, bworld3, bworld4, bworld5, bworld6, bworld7, bworld8, bworld9, bworld10, bworld11, bworld12],//change
      progress: blank_prog,
      layout: 1,
      yt: "",
      link: ["https://drive.google.com/file/d/1JqQ1jvtjp7YHJPCqorSKrVzf5bMbUoZQ/view?usp=sharing", "https://issuu.com/krupacsekhar/docs/bonsai_world"],
      git: "",
      location: "Concept Designer"
    }
  ];

  const writing = [

    {
      title: "Research",
      description: "I write research reports that address pressing issues in social equity, heritage preservation, and sustainability. My work often explores how the built environment influences access to essential services such as healthcare and green space, as well as the intersections of architecture with politics, culture, and environmental responsibility. \nThe first linked piece is an article for the Cornell Healthcare Review examining how systemic discrimination is embedded in the U.S. healthcare system. The second is the final paper from an independent study on Chinese vernacular architecture and its adaptation in the face of modernization. The third analyzes smart cities and evaluates their potential to advance sustainable development.",
      skills: "",
      imgArray: [writing_1, writing_2, writing_3],//change
      progress: blank_prog,
      layout: 0,
      yt: "",
      link: ["https://www.cornellhealthcarereview.org/post/our-healthcare-system-built-to-discriminate", "https://docs.google.com/document/d/1iuO8ax69s0BJa30e7CRM3lt3GT_ilw8Bxx4r88E-7k0/edit?usp=sharing", "https://docs.google.com/document/d/1usr9el7guxJsJoybEyqr766AlSGyv-r3Gxke-hPCJVg/edit?usp=sharing"],
      git: "",
      location: ""
    },
    {
      title: "Creative: Long Form",
      description: "I have written several long form pieces, and am highlighting two here. The first is a poem-style piece I wrote for CollectiveX magazing, in which I shed light on the immigrant experience through a post-capitalist lens. \n The second is a play prequel to Christopher Chen's 'You Mean to do me Harm.' Chen beautifully crafts a story that touches upon Chinese-American racial dynamics and gender roles in a subtle and mind-twisting way. In my piece, I focus on Ben and Samantha, a married couple who get into a race-based conflict (Ben is white while Samantha is Chinese). In Chen's play, we learn that Samantha advocated for herself to recieve a promotion both she and Ben wanted, while Ben was laid off. We also see that camping is at the heart of this conflict-- a seemingly innocent activity coded with racial dynamics. Read Chen's play first, and then come back to my piece in order to fully understand the symbolic foreshadowing I play off of.",
      skills: "",
      imgArray: [ode, script],//change
      progress: blank_prog,
      layout: 1,
      yt: "",
      link: ["https://heyzine.com/flip-book/90433dbc7d.html#page/16", "https://docs.google.com/document/d/1gJhVukHmQxr6954AP7aoWSh_lG7epvped1eJHIdxcx4/edit?usp=sharing"],
      git: "",
      location: ""
    },
    {
      title: "Creative: Short Form",
      description: "I am in love with the English language and its power to capture, animate, persuade, inform, communicate. To the left are some snapshots of personal vignettes I have written, focused on capturing a sense of place.",
      skills: "Creative Writing • Science Writing • Journalism",
      imgArray: [vignette_1, vignette_2, vignette_3],//change
      progress: blank_prog,
      layout: 0,
      yt: "",
      link: "",
      git: "",
      location: ""
    }
  ];

  const CategoryDescription = ({ text }) => (
    <>
      <Row className="justify-content-center">
        <Col md="8" className="d-flex justify-content-center">
          <div className="proj-desc">{text}</div>
        </Col>
      </Row>
      <div style={{ height: '1rem' }} /> {/* spacer */}
    </>
  );

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Recent Projects</h2>
            <div className="spacer">h</div>

            <Tab.Container id="projects-tabs" defaultActiveKey="arts">
              <Nav variant="pills" className="nav-pills mb-3 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="tech">Tech</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="arts">Arts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="design">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="writing">Writing</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="tech">
                  <div style={{ height: '1rem' }} /> {/* spacer */}
                  <CategoryDescription text={"I tinker. Over the past four years, this took the form of a Computer Science degree, where I learned to ideate, design, and code various brainchildren (including this website)! I am an experienced front-end developer, UX researcher/designer, and technical project manager with a passion for leveraging my technical skills to address meaningful issues in creative ways."} />
                  <div style={{ height: '1rem' }} /> {/* spacer */}
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
                  <div style={{ height: '1rem' }} /> {/* spacer */}
                  <CategoryDescription text={"I create! I love making things with my hands and body— fine art, digital art, music, dance, and most recently, figure skating! I love the process of carefully honing a craft over time; art is like meditation for me. I have been invited to showcase my visual and performing art in venues including Cornell Univerisity art galleries, the National Gallery of Art, the Lincoln Center, and Carnegie Hall."} />
                  <div style={{ height: '1rem' }} /> {/* spacer */}
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
                <Tab.Pane eventKey="design">
                  <div style={{ height: '1rem' }} /> {/* spacer */}
                  <CategoryDescription text={"I envision— how to tell a story through a space, capture an emotion in a photograph, communicate cultural essence through decor. I approach spatial design as a tool to preserve and revitalize culture and history, guided by principles of reuse, regeneration, and nature-forward thinking. I had the opportunity to intern at sustainable interior design firm AdesignStorie, where I led materials research, drafted sustainability policies for the World Design Organization, and contributed to design concepts for client projects and the Dundee Design Festival. I’m currently studying historic preservation in architectural and urban design in Beijing, China."} />
                  <div style={{ height: '1rem' }} /> {/* spacer */}
                  <Row>
                    {
                      design.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>                </Tab.Pane>
                <Tab.Pane eventKey="writing">
                  <div style={{ height: '1rem' }} /> {/* spacer */}
                  <CategoryDescription text={"I share. My writing is both academic and creative, and it is a way for me to explore things I am most curious about— design, urban planning, culture, nature. I write academic pieces, poems, vignettes, and also recently started an Instagram account and YouTube channel where I share my insights on topics I am curious about."} />
                  <div style={{ height: '1rem' }} /> {/* spacer */}
                  <Row>
                    {
                      writing.map((project, index) => {
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