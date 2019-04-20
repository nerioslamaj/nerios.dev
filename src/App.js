import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Stars from './components/Stars/Stars.jsx';
import Shader1 from './components/Shader/Shader1.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import PortfolioFull from './components/PortfolioFull/PortfolioFull.jsx';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()   // Create a ref object 
  }

  componentDidMount() {
    this.myRef.current.scrollTo(0, 0);
  }

  render() {
    return (
      <div ref={this.myRef} className="App">
        <Stars></Stars>
        <Shader1></Shader1>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/portfolio/:id" component={PortfolioFull} />
      </div>
    );
  }
}

export default App;
