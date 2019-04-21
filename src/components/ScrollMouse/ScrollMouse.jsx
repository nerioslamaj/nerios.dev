import React, { Component } from 'react';
import './ScrollMouse.scss';

class ScrollMouse extends Component {
  render() {
    var svgTag = `<svg class="ScrollMouse" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25 40" style="enable-background:new 0 0 25 40" xml:space="preserve">
                    <path d="M11,39.5C5.2,39.5,0.5,34.8,0.5,29V11C0.5,5.2,5.2,0.5,11,0.5h3c5.8,0,10.5,4.7,10.5,10.5v18c0,5.8-4.7,10.5-10.5,10.5H11z"></path>
                    <circle cx="12.5" cy="11.5" r="1.5"></circle>
                  </svg>`
    return (
      <span dangerouslySetInnerHTML={{__html: svgTag }}></span>
    )
  }
}

export default ScrollMouse;
