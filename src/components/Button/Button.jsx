import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {

  render() {
    return (
      <span style={{color: this.props.btnColor}} className="Button">
        Me now
        <div style={{backgroundColor: this.props.btnColor}} className="line"></div>
      </span>
    );
  }
}

export default Button;
