import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PortfolioItem.scss';

class PortfolioItem extends Component {
  render() {
    const item = this.props.portfolioData;
    return (
      <div className="PortfolioItem">
        <div className="port-container" onClick={() => this.props.dispatch({ type: 'OPEN_PORTFOLIO', data: item })}>
          <div className="port-info">
            <div className="port-text">
              <h1 className="alt">{item.mini_title}</h1>
              <h6>{item.mini_subtitle}</h6>
            </div>
          </div>
          <div className="imazhi-child" style={{backgroundImage: 'url(' + item.thumbnail + ')', width: 'unset'}}></div>
        </div>
      </div>
    );
  }
}

export default connect()(PortfolioItem);
