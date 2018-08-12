import React from 'react';

import './Person.css';

const person = (props) => {
    return (
        <div className="Person" onClick={props.clicked}>
            <p>I am {props.name}, {props.age} year's of age</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.nameChanged} value={props.name}/>
        </div>
    )
}

export default person;