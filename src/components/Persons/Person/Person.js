import React, {Component} from 'react';
import classes from './Person.css';

import './Person.css';

class Person extends Component {

    constructor(props){
        super(props);
        console.log("[Person.js] Inside Constructor ", props);
      }
    
      componentWillMount(){
        console.log("[Person.js] Inside componentWillMount ");
      }
    
      componentDidMount(){
        console.log("[Person.js] Inside componentDidMount ");
      }

      componentWillUnmount(){
        console.log("[Person.js] Inside componentWillUnMount ");
      }

    render(){
        console.log("[Person.js] Inside Render()");
        return (
            <div className={classes.Person} >
            <p onClick={this.props.click}>I am {this.props.name}, {this.props.age} year's of age</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.nameChanged} value={this.props.name}/>
        </div>
        )

    }
}

export default Person;