import React, { Component } from 'react';
import { connect } from 'react-redux';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { MdClose, MdOpenInNew } from 'react-icons/md';
import './PortfolioFull.scss';

class PortfolioFull extends Component {

  componentDidMount() {
    disableBodyScroll(window);
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks(window);
  }

  render() {
    const item = this.props.portfolioData;
    return (
      <div className="PortfolioFull">
        <div className="inner-PortfolioFull">
          <span className="cancel" onClick={() => this.props.dispatch({ type: 'CLOSE_PORTFOLIO', data: null })}><MdClose/></span>
        </div>
      </div>
    );
  }
}

export default connect()(PortfolioFull);
