import React from 'react';
import config from '../../config';

const Header = () => {
  return (
    <header id="header">
      <h1>{config.heading}</h1>
      <p>{config.subHeading}</p>
    </header>
  );
}

export default Header;