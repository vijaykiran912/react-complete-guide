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
        {
          this.state.persons.map(persons => {
            return <Person
              name={persons.name}
              age={persons.age} />
          })        
        }
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
