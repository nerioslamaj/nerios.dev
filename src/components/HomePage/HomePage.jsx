import React, { Component } from 'react';
import Menu from '../Menu/Menu.jsx';
import Landing from '../Landing/Landing.jsx';
import WhiteSection from '../WhiteSection/WhiteSection.jsx';
import Footer from '../Footer/Footer.jsx';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import './HomePage.scss';

class HomePage extends Component {

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

  componentWillUnmount() {
    document.getElementsByTagName("CANVAS")[0].classList.remove("no-clip");
  }

  render() {
    let enteredThePage = this.state.enteredThePage;

    if (enteredThePage) {
      document.getElementsByTagName("CANVAS")[0].classList.add("no-clip");
    }

    return (
      <div className="HomePage">
        <Menu></Menu>
        <Landing landed={ enteredThePage }></Landing>
        <WhiteSection></WhiteSection>
        <Footer></Footer>
      </div>
    );
  }
}

export default HomePage;
