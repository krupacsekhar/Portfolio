import React from 'react';
import { Carousel } from 'react-bootstrap';
import YouTube from 'react-youtube';

const YouTubeCarousel = ({ videoIds }) => {
  const renderVideos = () => {
    return videoIds.map((videoId) => {
      return (
        <Carousel.Item key={videoId}>
          <YouTube videoId={videoId} />
        </Carousel.Item>
      );
    });
  };

  return (
    <Carousel>
      {renderVideos()}
    </Carousel>
  );
};

export default YouTubeCarousel;
