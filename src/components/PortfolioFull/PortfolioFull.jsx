import React, { Component } from 'react';
import { connect } from 'react-redux';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
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
        <button onClick={() => this.props.dispatch({ type: 'CLOSE_PORTFOLIO', data: null })}>CLOSE</button>
      </div>
    );
  }
}

export default connect()(PortfolioFull);
