import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import projImg1 from "../assets/img/project-img1.png";



export const ProjectCard = ({ title, skills, description, imgArray, progress, layout }) => {
  const imageItems = (imgArray.length > 1) ?
    imgArray.map((image) => {
      return (
        <Carousel.Item>
          <img
            className="proj-imgbx"
            src={image}
            alt="First slide"
          />
        </Carousel.Item>
      );
    })
    : (imgArray.map((image) => {
      return (
        <div className="proj-imgbx">
          <img src={image} />
        </div>
      );
    }))

  const images = (imgArray.length > 1) ? (
    <Carousel>{imageItems}</Carousel>
  ) : (imageItems)

  const fullLayout =
    layout === 0 ? (
      <Row>
        <Col sm={4}>{images}</Col>
        <Col sm={8}>
          <div className='h1'>{title} {progress}</div>

          <div className='proj-skills'>{skills}</div>
          <div className='proj-desc'>{description}</div>
        </Col>
      </Row>) :
      (<Row>
        <Col sm={8}>
          <div className='h1'>{title} {progress}</div>

          <div className='proj-skills'>{skills}</div>
          <div className='proj-desc'>{description}</div>
        </Col>
        <Col sm={4}>{images}</Col>

      </Row>)


  return (
    < Container >
      {fullLayout}
    </Container >
  )

}