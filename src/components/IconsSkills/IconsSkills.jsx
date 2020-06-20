
import React from 'react';
import development from '../../assets/img/development.svg';
import design from '../../assets/img/design.svg';
import project from '../../assets/img/project.svg';
import user from '../../assets/img/user.svg';
import './IconsSkills.scss';

const IconsSkills = () => {
  return (
    <div className="IconsSkills" id="about">
      <div>
        <img src={development} alt="Development"/>
        <h6>Development</h6>
      </div>
      <div>
        <img src={user} alt="Prototyping"/>
        <h6>Prototyping</h6>
      </div>
      <div>
        <img src={design} alt="Testing"/>
        <h6>Testing</h6>
      </div>
      <div>
        <img src={project} alt="Problem Solving"/>
        <h6>Problem Solving</h6>
      </div>
    </div>
  )
}

export default IconsSkills;
