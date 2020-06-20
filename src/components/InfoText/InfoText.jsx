import React from 'react';
import ReactGA from 'react-ga';
import Button from '../Button/Button.jsx';
import './InfoText.scss';

const InfoText = () => {
  
  const linkClick = (link) => {
    ReactGA.event({
      category: 'Resume',
      action: 'Inline URL Click',
      label: link
    })
  }

  return (
    <div className="InfoText" id="stack">
      <div>
        <h2>Education</h2>
        <p>Feb 2018 — June 2019 : M.Sc. Computer Science at <a onClick={() => linkClick('London Met')} rel="noopener noreferrer" target="_blank" href="https://www.londonmet.ac.uk">London Metropolitan University</a></p>
        <p>Oct 2013 — Oct 2016 : B.Sc. Electronic Engineering at <a onClick={() => linkClick('UPT')} rel="noopener noreferrer" target="_blank" href="https://www.upt.al/en/">Polytechnic University of Tirana</a></p>
        <p>Sep 2009 — Jul 2013 : Electronics Professional High School at <a onClick={() => linkClick('Harry Fultz')} rel="noopener noreferrer" target="_blank" href="https://harryfultz.edu.al/en/">Harry Fultz Institute</a> (studied in English)</p>
      </div>
      <div>
        <h2>Work Experience</h2>
        <p>Jun 2019 — Present : Front End Engineer at <a onClick={() => linkClick('Zava')} rel="noopener noreferrer" target="_blank" href="https://www.zavamed.com/uk/">Zava</a></p>
        <p>Mar 2018 — Jun 2019 : Front End Developer at <a onClick={() => linkClick('Thortful')} rel="noopener noreferrer" target="_blank" href="https://www.thortful.com/">Thortful Ltd.</a></p>
        <p>Feb 2018 — Sep 2018 : JS Developer & Researcher at <a onClick={() => linkClick('London Met Job')} rel="noopener noreferrer" target="_blank" href="https://www.londonmet.ac.uk">London Metropolitan University</a>, for <a onClick={() => linkClick('Lloyds Bank')} rel="noopener noreferrer" target="_blank" href="https://www.lloydsbank.com/">Lloyds Bank</a></p>
        
        <a className="no-text-decoration" href="https://www.linkedin.com/in/nerioslamaj/" rel="noopener noreferrer" target="_blank">
          <Button btnColor={'#f74f3f'}  btnText={'More on Linkedin'}></Button>
        </a>
      </div>
      <div>
        <h2>Technologies</h2>
        <p>ES6, Vue, Angular, React, Redux, Sass, Webpack, Gulp, Canvas, GLSL, ThreeJS, Bulma, SPA, SSR, Jest, VizDiffs, Cypress, AB Testing</p>
        <p>NodeJS, NPM, PHP, Git, Web Sockets, Jenkins, Data Structures, New Relic, AWS, Express, SQL, NoSQL, ML algorithms</p>
        <p>Storybook, Figma, Invision, Sketch, Photoshop, Illustrator, UX</p>
      </div>
    </div>
  );
}

export default InfoText;
