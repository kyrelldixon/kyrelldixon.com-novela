import React, { useState, useEffect } from 'react';

const SlideShow = ({ settings }) => {
  const [position, setPosition] = useState(0);
  const [lastPosition, setLastPosition] = useState(0);

  const rotateSlide = () => {
    setInterval(() => {
      setLastPosition(position);
      setPosition((pos) => pos + 1);

      if (position >= settings.images.length) {
        setPosition(0);
      }

      // Hide last image after a short delay.
      setTimeout(() => {
        setLastPosition(position);
      }, settings.delay / 2);

    }, settings.delay);
  }

  useEffect(() => {
    rotateSlide();
  }, [])

  return (
    <div id="bg">
      {settings.images.map((image, i) => {
        return (
          <div
            key={image['url']}
            style={{
              backgroundPosition: image['position'],
              backgroundImage: `url("${image['url']}")`,
            }}
            className={
              i === position ? 'visible top' : i === lastPosition ? 'visible' : ''
            }
          />
        );
      })}
      ;
    </div>
  );
}

export default SlideShow;