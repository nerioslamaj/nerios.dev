import React, { Component } from 'react';
import Menu from './components/Menu/Menu.jsx';
import Stars from './components/Stars/Stars.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
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
        <Menu></Menu>
        <Stars></Stars>
        <HomePage></HomePage>
      </div>
    );
  }
}

export default App;
