import React from 'react';
import './assets/css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { getFooterCopy, getFullYear } from './utils';

export default function Footer () {
  return (
    <div className='Footer'>
      <div className='footer-logo' />
      <div className='footer-socials'>
        <div className='icons' id='linkedin-logo'>
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
        <div className='icons' id='twitter-logo'>
          <FontAwesomeIcon icon={faTwitterSquare} />
        </div>
        <div className='icons' id='facebook-logo'>
          <FontAwesomeIcon icon={faFacebookSquare} />
        </div>
      </div>
      <div className='footer-text'>
        <p>{getFooterCopy(true)}  &#9474;&copy; copyright {getFullYear()} &#9474; Terms & conditions</p>
      </div>
    </div>
  );
}
