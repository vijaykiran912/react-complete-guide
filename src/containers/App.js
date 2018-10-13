import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {

  constructor(props){
    //Must add super call
    super(props);
    //This is the only place where we can use props without this keyword
    console.log("[App.js] Inside Constructor ", props.title);
  }

  componentWillMount(){
    console.log("[App.js] Inside componentWillMount ", this.props.title);
  }

//   shouldComponentUpdate(nextProps, nextState){
//     console.log("[UPDATE App.js] Inside should Component update", nextProps);
//     return nextState.persons !== this.state.persons ||
//            nextState.showPersons !== this.state.showPersons; 
// }


  componentDidMount(){
    console.log("[App.js] Inside componentDidMount ");
  }
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
    console.log("[App.js] Inside Render()");
    let persons = null;
    if (this.state.showPersons) {
      persons = (<Persons persons={this.state.persons}
                   clicked={this.deletePersonHandler} 
                   changed={this.nameChangedHandler}
            />)
    }

    return (
      <div className={classes.App}>
        <button onClick={() => {this.setState({showPersons:true})}} >Show Persons</button>
        <Cockpit appTitle={this.props.title}
                 persons={this.state.persons}
                 showPersons={this.state.showPersons}
                 clicked={this.tooglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
