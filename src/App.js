import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { "name": "Vijay", "age": 29 },
      { "name": "Kohli", "age": 30 },
      { "name": "Pujara", "age": 32 }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>I'm React App </h1>
        <p> This is working </p>
        <button>Swith Button</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My hobbies: Coding </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
