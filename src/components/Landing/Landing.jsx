import React, { Component } from 'react';
import { connect } from 'react-redux';
import IntroBlock from '../IntroBlock/IntroBlock.jsx';
import MeNowModal from '../MeNowModal/MeNowModal.jsx';
import ScrollMouse from '../ScrollMouse/ScrollMouse.jsx';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import './Landing.scss';

class Landing extends Component {
  
  render() {
    let enteredThePage = this.props.landed;
    let introBlock;
    let modal;

    if (enteredThePage) {
      introBlock = <IntroBlock></IntroBlock>;
      document.getElementsByTagName("CANVAS")[0].classList.add("no-clip");
    } else {
      introBlock = null;
    }

    if (this.props.modalState) {
      window.scroll({ top: 0, behavior: 'smooth' })
      // window.scrollTo(0, 0)
      disableBodyScroll(window);
      document.getElementsByTagName("CANVAS")[0].classList.remove("no-clip");
      modal = <MeNowModal></MeNowModal>;
    } else {
      modal = null;
      clearAllBodyScrollLocks(window);
    }

    return (
      <div className="Landing" id="landing">
        {introBlock}
        {modal}
        <ScrollMouse></ScrollMouse>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modalState: state.modalState
});

export default connect(mapStateToProps)(Landing);
