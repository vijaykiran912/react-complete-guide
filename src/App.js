import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I'm React App </h1>
        <p> This is working </p>
        <Person />
        <Person />
        <Person />
      </div>
    );
  }
}

export default App;
