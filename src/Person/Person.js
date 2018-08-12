import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I am {props.name}, {props.age} year's of age</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;