import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";
// import Radium, { StyleRoot } from "radium";
class App extends Component {
  state = {
    persons: [
      { id: "aifeh", name: "Cameron", age: 24 },
      { id: "feifs", name: "Robert", age: 22 },
      { id: "jieni", name: "Alexander", age: 21 },
      { id: "ienwi", name: "Clifford", age: 19 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  // Handlers
  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  // Name Change
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
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
      color: "white",
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
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
                key={person.id}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      // <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(" ")}>This is really working!</p>
          <button style={style} onClick={this.togglePersonsHandler}>
            Toggle Persons
          </button>
          {persons}
        </div>
      // </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

// export default Radium(App);
export default App;
