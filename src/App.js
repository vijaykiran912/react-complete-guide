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

  deletePersonHandler = (personIndex) => {
    /*Using splice*/
    //const persons = this.state.persons.splice();
    /*Using spread operator*/
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons : persons});
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
          this.state.persons.map((persons, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
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
