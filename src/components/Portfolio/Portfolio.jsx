import React, { Component } from 'react';
import { connect } from 'react-redux';
import PortfolioItem from '../PortfolioItem/PortfolioItem.jsx';
import Data from '../../assets/files/portfolio.json'
import PortfolioFull from '../PortfolioFull/PortfolioFull.jsx';
import './Portfolio.scss';

class Portfolio extends Component {

  render() {
    let Full = this.props.openPortfolioItem.opened ? <PortfolioFull portfolioData={this.props.openPortfolioItem.data}></PortfolioFull> : null;
    let PortfolioItems = [];
    Data.map((x, i) => {
      PortfolioItems.push(<PortfolioItem portfolioData={x} key={x.id}></PortfolioItem>)
    })

    return (
      <div className="Portfolio" id="portfolio">
        {PortfolioItems}
        {Full}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  openPortfolioItem: state.openPortfolioItem
});

export default connect(mapStateToProps)(Portfolio);
