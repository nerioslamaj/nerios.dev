import React, { Component } from 'react';
import Menu from './components/Menu/Menu.jsx';
import Stars from './components/Stars/Stars.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import './App.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Menu></Menu>
        <Stars></Stars>
        <HomePage></HomePage>
      </div>
    );
  }
}

export default App;
