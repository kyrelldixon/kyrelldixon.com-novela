import React from 'react';
import config from '../../config';

const Footer = () => {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li key={icon}>
              <a href={url} aria-label={name} className={`icon ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>&copy; Kyrell Dixon.</li>
      </ul>
    </footer>
  );
}

export default Footer;