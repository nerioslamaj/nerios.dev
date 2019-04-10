import React, { Component } from 'react';
import { connect } from 'react-redux';
import Shader1 from '../Shader/Shader1.jsx';
import IntroBlock from '../IntroBlock/IntroBlock.jsx';
import MeNowModal from '../MeNowModal/MeNowModal.jsx';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import './Landing.scss';

class Landing extends Component {

  constructor(props) {
    super(props);

    this.state = {
      enteredThePage: false
    };
  }

  componentDidMount() {
    disableBodyScroll(window);
    setTimeout(() => {
      this.setState({ enteredThePage: true });
      clearAllBodyScrollLocks(window);
    }, 1800)
  }

  render() {
    let enteredThePage = this.state.enteredThePage;
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
      <div className="Landing">
        <Shader1></Shader1>
        {introBlock}
        {modal}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modalState: state.modalState
});

export default connect(mapStateToProps)(Landing);
