import React, { Component } from 'react';
import './App.css';
import VowelCount from './VowelCount.js';
import ConsonantCount from './ConsonantCount.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Counting Letters</h1>
          <input placeholder="enter text here"/>
          <VowelCount/>
          <ConsonantCount/>
        </header>
      </div>
    );
  }
}

export default App;
