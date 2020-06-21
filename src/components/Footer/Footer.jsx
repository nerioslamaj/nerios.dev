import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Companies from '../Companies/Companies.jsx';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaCodepen, FaDribbble } from 'react-icons/fa';
import './Footer.scss';

class Footer extends Component {

  socialClick(link) {
    ReactGA.event({
      category: 'Resume',
      action: 'Inline URL Click',
      label: link
    });
  }

  render() {
    return (
      <div className="Footer row" id="contact">
        <div className="container">
          <Companies></Companies>
          <h2 className="alt">Let's keep in touch</h2>
          <h3 className="alt"><a onClick={() => this.socialClick('Email')} target="_blank" href="mailto:nerios.lamaj@gmail.com">nerios.lamaj@gmail.com</a></h3>
          <div className="social-media">
            <a onClick={() => this.socialClick('Linkedin')} target="_blank" href="https://www.linkedin.com/in/nerioslamaj/"><FaLinkedin/></a>
            <a onClick={() => this.socialClick('Github')} target="_blank" href="https://github.com/nerioslamaj"><FaGithub/></a>
            <a onClick={() => this.socialClick('Goodreads')} target="_blank" href="https://www.goodreads.com/user/show/49899773-nerios-lamaj" className="goodreads">g</a>
            <a onClick={() => this.socialClick('Codepen')} target="_blank" href="https://codepen.io/nerios/"><FaCodepen/></a>
            <a onClick={() => this.socialClick('Dirbbble')} target="_blank" href="https://dribbble.com/nerioslamaj"><FaDribbble/></a>
            <a onClick={() => this.socialClick('Twitter')} target="_blank" href="https://twitter.com/NeriosLamaj"><FaTwitter/></a>
            <a onClick={() => this.socialClick('Instagram')} target="_blank" href="https://www.instagram.com/nerioslamaj/"><FaInstagram/></a>
          </div>
          <div className="mini-footer">
            <p>Designed and <a onClick={() => this.socialClick('GIT Repo')} target="_blank" href="https://github.com/nerioslamaj/nerios.dev">developed</a> by Nerios Lamaj — For more information you can <a onClick={() => this.socialClick('CV Download')} href="files/nlcv.pdf">download my CV</a>.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
