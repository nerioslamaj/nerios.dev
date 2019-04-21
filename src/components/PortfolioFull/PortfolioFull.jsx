import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdClose, MdArrowBack, MdArrowForward } from 'react-icons/md';
import Data from '../../assets/files/portfolio.json'
import './PortfolioFull.scss';

class PortfolioFull extends Component {

  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.nextItem = this.nextItem.bind(this);
    this.prevItem = this.prevItem.bind(this);
  }

  // componentDidMount () {
  //   setTimeout(() => {
  //     window.scrollTo(0, 0);
  //   }, 300)
  // }

  goBack() {
    this.props.history.push("/");
  }

  nextItem() {
    let currentId = parseInt(this.props.match.params.id) + 1;

    Data.some((x, i) => {
      if(currentId === parseInt(x.id) && x.inner_portfolio && x.active) {
        this.props.history.push("/portfolio/" + currentId)
        return true
      }
    })
  }

  prevItem() {
    let currentId = parseInt(this.props.match.params.id) - 1;

    Data.some((x, i) => {
      if(currentId === parseInt(x.id) && x.inner_portfolio && x.active) {
        this.props.history.push("/portfolio/" + currentId)
        return true
      }
    })
  }

  render() {
    let item = {};

    Data.some((x, i) => {
      if(this.props.match.params.id === x.id && x.inner_portfolio) {
        item = x.inner_portfolio;
        return true
      } else if(i === Data.length - 1) {
        this.props.history.push("/");
        return true;
      }
    })

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
      <div className="PortfolioFull">
        <div className="inner-PortfolioFull">
          <div className="action">
            <button onClick={ this.goBack } className="cancel"><MdClose/></button>
            <button onClick={ this.nextItem } disabled={item.last}><MdArrowForward/></button>
            <button onClick={ this.prevItem } disabled={item.first}><MdArrowBack/></button>
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
    );
  }
}

export default connect()(PortfolioFull);
