import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: "1", name: "Vijay", age: 29 },
      { id: "2", name: "Kohli", age: 30 },
      { id: "3", name: "Pujara", age: 32 }
    ]
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
       return p.id === id;
     });
  
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState(
      {
        persons
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
      backgroundColor: 'green',
      /* 'background-color' : 'red', */
      color : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover' : {
        backgroundColor : 'lightgreen',
        color : 'black'
      }
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (<div>
        {
          this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} 
              key={person.id} nameChanged={(event) => this.nameChangedHandler(event, person.id)}/>
          })        
        }
      </div>)

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor : 'salmon',
        color : 'black'
      }
    }

    const classes = [];
    if(this.state.persons.length <=2){
      classes.push('red');
    }
    if(this.state.persons.length <=1){
      classes.push('bold');
    }

    return (
      <StyleRoot>
      <div className="App">
        <h1>I'm React App </h1>
        <p className={classes.join(' ')}> This is really working </p>
        <button style={style} onClick={this.tooglePersonsHandler}>
          Switch Button
        </button>
        {persons}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
