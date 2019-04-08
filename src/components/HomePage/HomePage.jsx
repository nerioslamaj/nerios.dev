import React, { Component } from 'react';
import Landing from '../Landing/Landing.jsx';
import WhiteSection from '../WhiteSection/WhiteSection.jsx';
import Footer from '../Footer/Footer.jsx';
import './HomePage.scss';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <Landing></Landing>
        <WhiteSection></WhiteSection>
        <Footer></Footer>
      </div>
    );
  }
}

export default HomePage;
