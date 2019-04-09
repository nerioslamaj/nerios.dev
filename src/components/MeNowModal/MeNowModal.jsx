import React, { Component } from 'react';
import Button from '../Button/Button.jsx';
import './MeNowModal.scss';

class MeNowModal extends Component {
  render() {
    // const item = this.props.portfolioData;
    return (
      <div className="MeNowModal">
        <h2>Recent Update</h2>
        <h6>Las Update: 09th of April 2019</h6>
        <p>Studying M.Sc. Computer Science at London MET and working on two freelance projects for a company in US. Also I am constantly improving my coding skills by following some courses on CodeSchool.</p>
        <p>Currently reading “Steve Jobs” by Walter Isaacson.</p>
        <Button btnColor={'#f74f3f'}></Button>
      </div>
    );
  }
}

export default MeNowModal;
