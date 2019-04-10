import React, { Component } from 'react';
import Button from '../Button/Button.jsx';
import './MeNowModal.scss';

class MeNowModal extends Component {
  render() {
    // const item = this.props.portfolioData;
    return (
      <div className="MeNowModal">
        <h1 className="alt">Recent Update</h1>
        <h6>09th of April 2019</h6>
        <p>Studying M.Sc. Computer Science at London MET and working on two freelance projects for a company in US. Also I am constantly improving my coding skills by following some courses on CodeSchool.</p>
        <p>Currently reading <a href="#">“Steve Jobs”</a> by Walter Isaacson.</p>
        <Button btnColor={'#f74f3f'}  btnText={'Close'} btnClick={'CLOSE_MODAL'}></Button>
      </div>
    );
  }
}

export default MeNowModal;
