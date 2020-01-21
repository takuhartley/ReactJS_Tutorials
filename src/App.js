import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "Cameron", age: 24 },
      { name: "Robert", age: 22 },
      { name: "Alexander", age: 21 },
      { name: "Clifford", age: 19 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  // Handlers
  deletePersonHandler = (personIndex) => {
    // Takes a copy of array with slice()
    const persons = [...this.state.persons];
    // const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  // Name Change
  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Cameron", age: 24 },
        { name: event.target.value, age: 22 },
        { name: "Alexander", age: 21 },
        { name: "Clifford", age: 19 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  // switchNameHandler = newName => {
  //   //console.log('Was clicked!');
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 24 },
  //       { name: "Rob", age: 22 },
  //       { name: "Alex", age: 21 },
  //       { name: "Cliff", age: 19 }
  //     ],
  //     otherState: this.otherState
  //   });
  // };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <p>App</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
