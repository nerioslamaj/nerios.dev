import React, { Component } from 'react';
import IconsSkills from '../IconsSkills/IconsSkills.jsx';
import AboutText from '../AboutText/AboutText.jsx';
import Portfolio from '../Portfolio/Portfolio.jsx';
import InfoText from '../InfoText/InfoText.jsx';
import './WhiteSection.scss';

const WhiteSection = () => {
  return (
    <div className="WhiteSection row">
      <div className="container">
        <IconsSkills></IconsSkills>
        <AboutText></AboutText>
        <Portfolio></Portfolio>
        <InfoText></InfoText>
      </div>
    </div>
  );
}

export default WhiteSection;
