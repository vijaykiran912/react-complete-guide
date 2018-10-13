import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux.js'

const cockpit = (props) => {

    const assignedClasses = [];
    if(props.persons.length <=2){
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <=1){
      assignedClasses.push(classes.bold);
    }

    let btnClass = classes.Button;
    if(props.showPersons){
       btnClass = [classes.Button, classes.Red].join(' ');
    }    
    return(
        <Aux>
        <h1>{props.appTitle} </h1>
        <p className={assignedClasses.join(' ')}> This is really working </p>
        <button className={btnClass} onClick={props.clicked}>
          Switch Button
        </button>
        </Aux>
    )
}

export default cockpit;