import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { connect } from 'react-redux';
import { MdWatchLater, MdOpenInNew } from 'react-icons/md';
import './PortfolioItem.scss';

class PortfolioItem extends Component {

  handlePortfolioClick(item) {
    if(item.active) {
      if(item.inner_portfolio) {
        this.props.dispatch({ type: 'OPEN_PORTFOLIO', data: item })
        ReactGA.event({
          category: 'Portfolio',
          action: 'Active',
          label: item.mini_title
        });
      } else {
        window.open(item.url, '_blank');
        ReactGA.event({
          category: 'Portfolio',
          action: 'URL',
          label: item.mini_title
        });
      }
    } else {
      ReactGA.event({
        category: 'Portfolio',
        action: 'Inactive',
        label: item.mini_title
      });
    }
  }

  render() {
    const item = this.props.portfolioData;
    let Icon;

    switch (item.icon) {
      case 'MdOpenInNew':
        Icon = <MdOpenInNew/>
        break
      case 'MdWatchLater':
        Icon = <MdWatchLater/>
        break
      default:
        Icon = null
    }

    return (
      <div className="PortfolioItem">
        <div className="port-container" onClick={() => this.handlePortfolioClick(item) }>
          <div className="port-info">
            <div className="port-text">
              <h1 className="alt">{item.mini_title}</h1>
              <h6>{item.mini_subtitle}{Icon}</h6>
            </div>
          </div>
          <div className="imazhi-child" style={{backgroundImage: 'url(' + item.thumbnail + ')', width: 'unset'}}></div>
        </div>
      </div>
    );
  }
}

export default connect()(PortfolioItem);
