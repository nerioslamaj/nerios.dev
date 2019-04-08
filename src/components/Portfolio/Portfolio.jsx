import React, { Component } from 'react';
import PortfolioItem from '../PortfolioItem/PortfolioItem.jsx';
import Data from '../../assets/files/portfolio.json'
import PortfolioFull from '../PortfolioFull/PortfolioFull.jsx';
import './Portfolio.scss';

class Portfolio extends Component {

  constructor(props) {
    super(props);
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.state = {
      opened: false,
      portfolioData: null
    };
  }

  handlePortfolioClick(data) {
    if(data) {
      this.setState({ portfolioData: data });
      this.setState({ opened: true });
    }
  }

  render() {
    let Full = this.state.opened ? <PortfolioFull portfolioData={this.state.portfolioData}></PortfolioFull> : null;
    let PortfolioItems = [];
    Data.map((x, i) => {
      PortfolioItems.push(<PortfolioItem portfolioData={x} key={x.id}></PortfolioItem>)
    })

    return (
      <div className="Portfolio" id="portfolio">
        {PortfolioItems}
        {/* <div onClick={() => this.handlePortfolioClick('about')}>
        </div> */}
        {Full}
      </div>
    );
  }
}

export default Portfolio;
