import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

var people = [
  {
    name: "David",
    age: 24,
    id: 1
  },
  {
    name: "John",
    age: 22,
    id: 2
  }
];

class Card extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>Age: {this.props.age}</p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        {people.map(function(person) {
          return <Card name={person.name} age={person.age} />;
        })}
      </div>
    );
  }
}

export default App;
