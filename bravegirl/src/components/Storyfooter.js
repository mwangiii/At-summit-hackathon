import React from "react";
import "./assets/css/StoryFooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare, faFacebookSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { getFooterCopy, getFullYear } from "./utils";

export default function StoryFooter() {
    return (
        <div className="StoryFooter">
        <div className="footer-logo">   
        </div>
        <div className="footer-socials">
          <div className='icons' id='linkedin-logo'>
            <FontAwesomeIcon icon={faLinkedin}/>
          </div>
          <div className='icons' id='twitter-logo'>
            <FontAwesomeIcon icon={faTwitterSquare} />
          </div>
          <div className='icons' id='facebook-logo'>
            <FontAwesomeIcon icon={faFacebookSquare} />
          </div>
        </div>
      </div>
    );
}