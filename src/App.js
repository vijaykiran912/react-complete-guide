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

  swithButtonHandler = (newName) => {
    this.setState(
      {
        persons: [
          { "name": newName, "age": 29 },
          { "name": "Kohli", "age": 30 },
          { "name": "Pujara", "age": 31 }
        ]
      }
    );
  }

  nameChangedHandler = (event) => {
    this.setState(
      {
        persons: [
          { "name": "Vijay", "age": 29 },
          { "name": event.target.value, "age": 30 },
          { "name": "Pujara", "age": 31 }
        ],
        showPersons: false
      }
    );
  }

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      /* 'background-color' : 'red', */
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (<div>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          nameChanged={this.nameChangedHandler}>
          My hobbies: Coding
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          clicked={() => this.swithButtonHandler('Vijay Reddy')}>
        </Person>
      </div>)
    }

    return (
      <div className="App">
        <h1>I'm React App </h1>
        <p> This is working </p>
        <button style={style} onClick={this.tooglePersonsHandler}>
          Switch Button
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
