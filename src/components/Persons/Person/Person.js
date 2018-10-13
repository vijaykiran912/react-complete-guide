import React, {Component} from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClassNonFun';
import Aux from '../../../hoc/hoc.js';


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

      componentWillReceiveProps(nextProps){
        console.log("[UPDATE Person.js] Inside componentWillReceiveProps()", nextProps);
      }

      componentWillUnmount(){
        console.log("[Person.js] Inside componentWillUnMount ");
      }

      componentDidUpdate(nextProps, nextState){
        console.log("[UPDATE Person.js] Inside component did update", nextProps);
      }

    render(){
        console.log("[Person.js] Inside Render()");
        return (
            <Aux>
            <p onClick={this.props.click}>I am {this.props.name}, {this.props.age} year's of age</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.nameChanged} value={this.props.name}/>
        </Aux>
        )

        // return [
        //     <p key="1" onClick={this.props.click}>I am {this.props.name}, {this.props.age} year's of age</p>,
        //     <p key="2">{this.props.children}</p>,
        //     <input key="3" type="text" onChange={this.props.nameChanged} value={this.props.name}/>
        //     ]
    }
}

export default withClass(Person, classes.Person);