import React from 'react';
import ReactGA from 'react-ga';
import { connect } from 'react-redux';
import './Button.scss';

const Button = props => {

  const click = () => {
    props.dispatch({ type: props.btnClick })
    ReactGA.event({
      category: 'Button',
      action: 'Click',
      label: props.btnClick
    });
  }
  
  return (
    <span style={{color: props.btnColor}} className="Button" onClick={click}>
      {props.btnText}
      <div style={{backgroundColor: props.btnColor}} className="line"></div>
    </span>
  )
}

export default connect()(Button);
