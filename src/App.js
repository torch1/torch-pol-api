import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './shiny-button.css';

import YoutubeFeed from './YoutubeFeed.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
        </header>
        <content>
          <YoutubeFeed />
        </content>
      </div>
    );
  }
}

export default App;
