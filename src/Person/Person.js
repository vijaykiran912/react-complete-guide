import React from 'react';
import classes from './Person.css';

import './Person.css';

const person = (props) => {
    return (
        <div className={classes.Person} >
            <p onClick={props.click}>I am {props.name}, {props.age} year's of age</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.nameChanged} value={props.name}/>
        </div>
    )
}

export default person;