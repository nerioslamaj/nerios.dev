
import React, { Component } from 'react';
import development from '../../assets/img/development.svg';
import design from '../../assets/img/design.svg';
import project from '../../assets/img/project.svg';
import user from '../../assets/img/user.svg';
import './IconsSkills.scss';

class IconsSkills extends Component {
  render() {
    return (
      <div className="IconsSkills" id="about">
        <div>
          <img src={development} alt="Development"/>
          <h6>Development</h6>
        </div>
        <div>
          <img src={user} alt="User Experience"/>
          <h6>Prototyping</h6>
        </div>
        <div>
          <img src={design} alt="Design"/>
          <h6>Design</h6>
        </div>
        <div>
          <img src={project} alt="Project Managing"/>
          <h6>Project Managing</h6>
        </div>
      </div>
    );
  }
}

export default IconsSkills;
