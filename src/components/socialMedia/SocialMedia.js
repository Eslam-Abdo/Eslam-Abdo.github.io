import React from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FaEnvelope, FaFacebook, FaGithub, FaGitlab, FaHackerrank, FaInstagram, FaKaggle, FaLinkedinIn, FaMedium, FaStackOverflow, FaTwitter, FaYoutube } from "react-icons/fa6";

const fontStyles = {fontSize: '25px', verticalAlign:'middle'};

export default function socialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="social-media-div">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <i className="fab fa-github"> </i> */}
          <i><FaGithub style={fontStyles}/></i>
          
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <i className="fab fa-linkedin-in"> </i> */}
          <i><FaLinkedinIn style={fontStyles}/></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <i className="fas fa-envelope"></i> */}
          <i><FaEnvelope style={fontStyles}/></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gitlab ? (
        <a
          href={socialMediaLinks.gitlab}
          className="icon-button gitlab"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <i className="fab fa-gitlab"></i> */}
          <i><FaGitlab style={fontStyles}/></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.youtube ? (
        <a
        href={socialMediaLinks.youtube}
        className="icon-button youtube"
        target="_blank"
        rel="noopener noreferrer"
        >
          {/* <i className="fab fa-youtube"></i> */}
          <i><FaYoutube style={fontStyles}/></i>
          <span></span>
        </a>
      ) : null}


      {socialMediaLinks.facebook ? (
        <a
        href={socialMediaLinks.facebook}
        className="icon-button facebook"
        target="_blank"
        rel="noopener noreferrer"
        >
          {/* <i className="fab fa-facebook"></i> */}
          <i><FaFacebook style={fontStyles}/></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.instagram ? (
        <a
        href={socialMediaLinks.instagram}
        className="icon-button instagram"
        target="_blank"
        rel="noopener noreferrer"
        >
          {/* <i className="fab fa-instagram"></i> */}
          <i><FaInstagram style={fontStyles}/></i>
          <span></span>
        </a>
      ) : null}
      
      {socialMediaLinks.twitter ? (
        <a
          href={socialMediaLinks.twitter}
          className="icon-button twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <i className="fab fa-twitter"></i> */}
          <i><FaTwitter style={fontStyles}/></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.medium ? (
        <a
          href={socialMediaLinks.medium}
          className="icon-button medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <i className="fab fa-medium"></i> */}
          <i><FaMedium style={fontStyles}/></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.stackoverflow ? (
        <a
          href={socialMediaLinks.stackoverflow}
          className="icon-button stack-overflow"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <i className="fab fa-stack-overflow"></i> */}
          <i><FaStackOverflow style={fontStyles}/></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.hackerrank ? (
        <a
          href={socialMediaLinks.hackerrank}
          className="icon-button hackerrank"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <i className="fab fa-hackerrank" ></i> */}
          <i><FaHackerrank style={fontStyles}/></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.kaggle ? (
        <a
          href={socialMediaLinks.kaggle}
          className="icon-button kaggle"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <i className="fab fa-kaggle"></i> */}
          <i><FaKaggle style={fontStyles}/></i>
          <span></span>
        </a>
      ) : null}
   
    </div>
  );
}
