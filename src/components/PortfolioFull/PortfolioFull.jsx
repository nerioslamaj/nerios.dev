import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchScrollable } from 'react-scrolllock';
import { MdClose } from 'react-icons/md';
import './PortfolioFull.scss';

class PortfolioFull extends Component {

  state = { lockScroll: false }
  
  render() {
    const item = this.props.portfolioData.inner_portfolio;
    let paragraphs = [];
    let images = [];
    let video;
    let link;

    item.paragraphs.map((x, i) => {
      paragraphs.push(<p key={ i }>{ x }</p>)
    })

    item.images.map((x, i) => {
      images.push(<img alt={ "Image " + (i+1) } key={ i } src={ x }/>)
    })

    if(item.video) {
      video = <iframe title="youtube" src={item.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    }

    if(item.link) {
      link = <h6><a href={item.link} target="_blank">Live Demo</a></h6>
    }

    return (
      <TouchScrollable>
        <div className="PortfolioFull">
          <div className="inner-PortfolioFull"  body-scroll-lock-ignore>
            <div className="action">
              <span onClick={ () => this.props.dispatch({ type: 'CLOSE_PORTFOLIO', data: null }) } className="cancel"><MdClose/></span>
            </div>
            <div className="AllText container">
              <h1 className="name">{ item.title }</h1>
              <div className="body">
                <div className="details">
                  <p className="alt">Worked in</p>
                  <h6>{ item.date }</h6>
                  <p className="alt">Client</p>
                  <h6>{ item.worked_for }</h6>
                  <p className="alt">Categories</p>
                  <h6>{ item.categories }</h6>
                </div>
                <div className="paragraphs">
                  { paragraphs }
                  { link }
                </div>
              </div>
            </div>
            { images }
            { video }
          </div>
        </div>
      </TouchScrollable>
    );
  }
}

export default connect()(PortfolioFull);
