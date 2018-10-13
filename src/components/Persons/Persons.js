import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    constructor(props){
        super(props);
        console.log("[Persons.js] Inside Constructor ", props);
      }
    
      componentWillMount(){
        console.log("[Persons.js] Inside componentWillMount ");
      }
    
      componentDidMount(){
        console.log("[Persons.js] Inside componentDidMount ");
      }

      componentWillReceiveProps(nextProps){
          console.log("[UPDATE Persons.js] Inside componentWillReceiveProps()", nextProps);
      }

    //   shouldComponentUpdate(nextProps, nextState){
    //       console.log("[UPDATE Persons.js] Inside should component update", nextProps);
    //       return nextProps.persons !== this.props.persons || 
    //       nextProps.clicked !== this.props.clicked
    //       ||nextProps.changed !== this.props.changed; 
    //   }

      componentWillUpdate(nextProps, nextState){
        console.log("[UPDATE Persons.js] Inside component will update", nextProps);
      }

      componentDidUpdate(nextProps, nextState){
        console.log("[UPDATE Persons.js] Inside component did update", nextProps);
      }
    render(){
        console.log("[Persons.js] Inside Render()");
        return this.props.persons.map((person, index) => {
                return <Person
                  click={() => this.props.clicked(index)}
                  name={person.name}
                  age={person.age} 
                  key={person.id} nameChanged={(event) => this.props.changed(event, person.id)}/>
              });
    }
}

export default Persons;