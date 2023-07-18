import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import hyperlink from '../assets/img/hyperlink.svg';



export const ProjectCard = ({ title, skills, description, imgArray, progress, layout, yt, location, link }) => {
  const [showPopup, setShowPopup] = useState(false);
  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  const imageItems = (imgArray.length > 1) ?
    imgArray.map((image) => {
      return (
        <Carousel.Item>

          <img
            className="proj-imgbx"
            src={image}
            alt="image"
            onClick={handlePopupToggle}
          />

        </Carousel.Item>
      );
    })
    : (imgArray.map((image) => {
      return (
        <div className="proj-imgbx">
          <img
            src={image}
            alt="image"
            onClick={handlePopupToggle}
          />

        </div>
      );
    }))

  const imagesContainer = (
    <div className="image-container">
      {imgArray.length > 1 ? (
        <Carousel sx={{ marginTop: "25px" }}>{imageItems}</Carousel>
      ) : (
        <div className="proj-imgbx">
          <img src={imgArray[0]} onClick={handlePopupToggle} />
        </div>
      )}

      <Modal
        show={showPopup}
        onHide={handlePopupToggle}
        centered
        dialogClassName="popup-card"
      >
        <Modal.Body>
          {imgArray.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index}`} />
          ))}
        </Modal.Body>
      </Modal>


    </div>
  );

  const descriptionParagraphs = description.split('\n').map((paragraph, index) => {
    return <div className='full-width-description' key={index}>{paragraph}</div>;
  });

  const linkIcon = link === "" ? (<div></div>) : (<div className="social-icon">
    <a href={link}><img src={hyperlink} style={{ height: 20, width: 40 }} alt="link" /></a>
  </div>)

  const fullLayout =
    layout === 0 ? (
      <Row>
        <Col sm={12}>
          <div className="h1">
            {title} <img src={progress} alt="progress" />
            <div className="social-icon">{linkIcon}</div>

          </div>
          <div className="proj-location">{location}</div>
          <div className="proj-skills">{skills}</div>
        </Col>
        <Col sm={5}>{imagesContainer}</Col>
        <Col sm={7}>

          <div className="full-width-description">
            {descriptionParagraphs}
          </div>
        </Col>
      </Row>
    ) : (
      <Row>
        <Col sm={12}>
          <div className="h1">
            {title} <img src={progress} alt="progress" />
          </div>
          <div className="proj-location">{location}</div>
          <div className="proj-skills">{skills}</div>
        </Col>
        <Col sm={7}>

          <div className="full-width-description">{descriptionParagraphs}</div>
        </Col>
        <Col sm={5} className="carousel-holder">{imagesContainer}</Col>
      </Row>
    );


  const fullLayoutWithBox = (
    <div className="layout-box">
      {fullLayout}
    </div>
  );

  return (
    <Container>
      {fullLayoutWithBox}
    </Container>
  );


}