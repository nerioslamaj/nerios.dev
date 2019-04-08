import React, { Component } from 'react';
import './InfoText.scss';

class InfoText extends Component {
  render() {
    return (
      <div className="InfoText" id="stack">
        <div>
          <h2>Education</h2>
          <p>Feb 2018 — June 2019 : M.Sc. Computer Science at <a target="_blank" href="https://www.londonmet.ac.uk">London Metropolitan University</a></p>
          <p>Oct 2013 — Oct 2016 : B.Sc. Electronic Engineering at <a target="_blank" href="https://www.upt.al/en/">Polytechnic University of Tirana</a></p>
          <p>Sep 2009 — Jul 2013 : Electronics Professional High School at <a target="_blank" href="https://harryfultz.edu.al/en/">Harry Fultz Institute</a> (studied in English)</p>
        </div>
        <div>
          <h2>Work Experience</h2>
          <p>Mar 2018 — Present : Front End Engineer at <a target="_blank" href="https://www.thortful.com/">Thortful Ltd.</a></p>
          <p>Feb 2018 — Sep 2018 : JS Developer & Researcher at <a target="_blank" href="https://www.londonmet.ac.uk">London Metropolitan University</a>, for <a target="_blank" href="https://www.lloydsbank.com/">Lloyds Bank</a></p>
          <p>Dec 2016 — July 2017 : Digital Manager at <a target="_blank" href="https://www.newmoment.com/">New Moment</a></p>
          <p>Dec 2013 — Jan 2016 : Web Designer & Developer at <a target="_blank" href="http://www.imb.al/en/">IMB</a></p>
        </div>
        <div>
          <h2>Technologies</h2>
          <p>ES6, AngularJS, React, Redux, Sass, Less, Webpack, Gulp, Grunt, Canvas, GLSL, ThreeJS, Material Design, Bootstrap, SPA</p>
          <p>NodeJS, NPM, Yarn, Git, Web Sockets, Data Structures, Express, Feathers, Mongo, Jasmine, Karma, ML algorithms</p>
          <p>Zeppelin, Invision, Sketch, Photoshop, Illustrator, UX</p>
        </div>
      </div>
    );
  }
}

export default InfoText;
