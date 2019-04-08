import React, { Component } from 'react';
import Shader1 from '../Shader/Shader1.jsx';
import IntroBlock from '../IntroBlock/IntroBlock.jsx';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
  

import './Landing.scss';

class Landing extends Component {

  constructor(props) {
    super(props);

    // this.openCanvas = this.openCanvas.bind(this);
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

    if (enteredThePage) {
      introBlock = <IntroBlock></IntroBlock>;
      document.getElementsByTagName("CANVAS")[0].classList.add("no-clip");
    } else {
      introBlock = null;
    }

    return (
      <div className="Landing">
        <Shader1></Shader1>
        {introBlock}
      </div>
    );
  }
}

// function mapStateToProps(props) {
//   return{
//     form:state.appReducer.form
//   }
// }

// function mapDispatchToProps(props) {
//   return {
//     onChangeHandler: function (value){
//       return AppActions.onChangeHandler(value)
//     }
//   }
// }

export default Landing;
