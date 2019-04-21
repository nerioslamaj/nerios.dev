import React from 'react';
import Button from '../Button/Button.jsx';
import './IntroBlock.scss';

const IntroBlock = () => {
  return (
    <div className="intro-block">
      <h1 className="name">
        <span>N</span><span>e</span><span>r</span><span>i</span><span>o</span><span>s </span>
        <span>L</span><span>a</span><span>m</span><span>a</span><span>j</span>
      </h1>
      <h4>Front End Engineer</h4>
      <p>Creating Digital Products with passion</p>
      <div className="btn">
        <Button btnColor={'#f74f3f'} btnText={'Recent Update'} btnClick={'OPEN_MODAL'}></Button>
      </div>
    </div>
  )
}

export default IntroBlock;
