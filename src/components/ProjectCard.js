import React, { useState } from 'react';
import { Container, Row, Col, Carousel, Modal } from 'react-bootstrap';
import hyperlink from '../assets/img/hyperlink.svg';
import gitIcon from '../assets/img/giticon.svg';

/**
 * ProjectCard Component
 * Displays a project's title, images/videos (with modal), description, and links
 */
export const ProjectCard = ({
  title,
  skills,
  description,
  imgArray,
  progress,
  layout,
  location,
  link,
  git,
}) => {
  const [showPopup, setShowPopup] = useState(false);

  // Handle modal open/close
  const handlePopupToggle = () => setShowPopup(!showPopup);

  // Helper function to check if a media file is a video
  const isVideoFile = (filename) => {
    return typeof filename === 'string' && /\.(mp4|mov|avi)$/i.test(filename);
  };
  const isYouTubeUrl = (url) => {
    return typeof url === 'string' && /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//.test(url);
  };

  // Renders media (image or video) with optional onClick
  const renderMedia = (item, index, triggerPopup = false) => {
    const isVideo = isVideoFile(item);
    const isYouTube = isYouTubeUrl(item);

    if (isYouTube) {
      // Extract YouTube video ID from URL
      const videoIdMatch = item.match(
        /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/
      );
      const videoId = videoIdMatch ? videoIdMatch[1] : null;

      if (!videoId) return null; // invalid YouTube link

      const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&loop=1&playlist=${videoId}`;

      return (
        <div key={index} style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
          <iframe
            src={embedUrl}
            title={`YouTube video ${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          ></iframe>
        </div>
      );
    }


    if (isVideo) {
      return (
        <video
          key={index}
          controls
          style={{ width: '100%' }}
          onClick={triggerPopup ? handlePopupToggle : undefined}
          autoPlay
          muted
          loop
        >
          <source src={item} type={`video/${item.split('.').pop()}`} />
          Your browser does not support the video tag.
        </video>
      );
    }

    return (
      <img
        key={index}
        src={item}
        alt={`media-${index}`}
        style={{ width: '100%' }}
        onClick={triggerPopup ? handlePopupToggle : undefined}
      />
    );
  };

  // Carousel or single media preview
  const imagesContainer = (
    <div className="image-container">
      {imgArray.length > 1 ? (
        <Carousel>
          {imgArray.map((item, index) => (
            <Carousel.Item key={index}>
              {renderMedia(item, index, true)}
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <div className="proj-imgbx">{renderMedia(imgArray[0], 0, true)}</div>
      )}

      {/* Popup Modal for full-size view */}
      <Modal show={showPopup} onHide={handlePopupToggle} centered dialogClassName="popup-card">
        <Modal.Body>
          {imgArray.map((item, index) => renderMedia(item, index))}
        </Modal.Body>
      </Modal>
    </div>
  );

  // Formats multi-paragraph description
  const descriptionParagraphs = description.split('\n').map((para, index) => (
    <div className="full-width-description" key={index}>
      {para}
    </div>
  ));

  // Render link icons (external links or GitHub)
  const linkIcon = Array.isArray(link) ? (
    <div className="social-icon">
      {link.map((l, i) => (
        <a key={i} href={l} target="_blank" rel="noreferrer">
          <img src={hyperlink} alt="link" style={{ height: 20, width: 40 }} />
        </a>
      ))}
    </div>
  ) : link ? (
    <div className="social-icon">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={hyperlink} alt="link" style={{ height: 20, width: 40 }} />
      </a>
    </div>
  ) : null;

  const githubIcon = git ? (
    <div className="social-icon">
      <a href={git} target="_blank" rel="noreferrer">
        <img src={gitIcon} alt="github" style={{ height: 20, width: 40 }} />
      </a>
    </div>
  ) : null;

  // Layout options
  const fullLayout =
    layout === 0 ? (
      <Row>
        <Col sm={12}>
          <div className="h1">
            {title} <img src={progress} alt="progress" />
            <div className="project-icon">{linkIcon}</div>
            <div className="project-icon">{githubIcon}</div>
          </div>
          <div className="proj-location">{location}</div>
          <div className="proj-skills">{skills}</div>
        </Col>
        <Col sm={5} style={{ marginTop: '10px' }}>
          {imagesContainer}
        </Col>

        <Col sm={7}>
          {descriptionParagraphs}</Col>
      </Row>
    ) : (
      <Row>
        <Col sm={12}>
          <div className="h1">
            {title} <img src={progress} alt="progress" />
            <div className="project-icon">{linkIcon}</div>
            <div className="project-icon">{githubIcon}</div>
          </div>
          <div className="proj-location">{location}</div>
          <div className="proj-skills">{skills}</div>
        </Col>
        <Col sm={7}>{descriptionParagraphs}</Col>
        <Col sm={5} className="carousel-holder">
          {imagesContainer}
        </Col>
      </Row>
    );

  return <Container className="layout-box">{fullLayout}</Container>;
};
