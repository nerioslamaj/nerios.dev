import React, { Component } from 'react';
import Button from '../Button/Button.jsx';
import './MeNowModal.scss';

class MeNowModal extends Component {
  render() {
    // const item = this.props.portfolioData;
    return (
      <div className="MeNowModal">
        <h1 className="alt">Recent Update</h1>
        <h6>11th of April 2019</h6>
        <p>Studying M.Sc. Computer Science at London MET and working as a Frontend Engineer at <a href="https://www.thortful.com/">Thortful Ltd</a>. Also I am working on my master thesis which consists of a thorough research and application of Machine Learning algorithms in Javascript.</p>
        <p>Currently reading <a href="https://www.goodreads.com/book/show/8520610-quiet">"Quiet"</a> by Susan Cain.</p>
        <Button btnColor={'#f74f3f'}  btnText={'Close'} btnClick={'CLOSE_MODAL'}></Button>
      </div>
    );
  }
}

export default MeNowModal;
