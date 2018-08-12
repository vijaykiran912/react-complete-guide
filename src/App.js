import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I'm React App </h1>
        <p> This is working </p>
        <Person name="Vijay" age="29" />
        <Person name="Kohli" age="30"> My hobbies: Coding </Person>
        <Person name="Pujara" age="32" />
      </div>
    );
  }
}

export default App;
