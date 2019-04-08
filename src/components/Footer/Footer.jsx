import React, { Component } from 'react';
import Companies from '../Companies/Companies.jsx';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaCodepen, FaDribbble } from 'react-icons/fa';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className="Footer row" id="contact">
        <div className="container">
          <Companies></Companies>
          <h2 className="alt">Let's keep in touch</h2>
          <h3 className="alt"><a target="_blank" href="mailto:nerios.lamaj@gmail.com">nerios.lamaj@gmail.com</a></h3>
          <div className="social-media">
            <a target="_blank" href="https://www.linkedin.com/in/nerioslamaj/"><FaLinkedin/></a>
            <a target="_blank" href="https://github.com/nerioslamaj"><FaGithub/></a>
            <a target="_blank" href="https://www.goodreads.com/user/show/49899773-nerios-lamaj" className="goodreads">g</a>
            <a target="_blank" href="https://codepen.io/nerios/"><FaCodepen/></a>
            <a target="_blank" href="https://dribbble.com/nerioslamaj"><FaDribbble/></a>
            <a target="_blank" href="https://twitter.com/NeriosLamaj"><FaTwitter/></a>
            <a target="_blank" href="https://www.instagram.com/nerioslamaj/"><FaInstagram/></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
