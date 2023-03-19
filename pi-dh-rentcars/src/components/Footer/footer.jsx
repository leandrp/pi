import React from 'react';
import './styleFooter.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left">
        <p>© 2023 RentCars</p>
      </div>
      <div className="right">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faLinkedinIn} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </footer>
  );
};

export default Footer;