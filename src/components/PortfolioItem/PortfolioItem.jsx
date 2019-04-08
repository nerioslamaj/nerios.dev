import React, { Component } from 'react';
import './PortfolioItem.scss';

class PortfolioItem extends Component {
  render() {
    const item = this.props.portfolioData;
    return (
      <div className="PortfolioItem">
        <div className="port-container">
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

export default PortfolioItem;
