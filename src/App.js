import React, { useState } from "react";
import Person from "./Person/Person";
import "./App.css";

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Cameron", age: 24 },
      { name: "Robert", age: 22 },
      { name: "Alexander", age: 21 },
      { name: "Clifford", age: 19 }
    ],
    otherState: "some other value",
    showPersons: true
  });
  const [otherState, setOtherState] = useState("some other value");
  console.log(personsState, otherState);

  const switchNameHandler = newName => {
    //console.log('Was clicked!');
    setPersonsState({
      persons: [
        { name: newName, age: 24 },
        { name: "Rob", age: 22 },
        { name: "Alex", age: 21 },
        { name: "Cliff", age: 19 }
      ],
      otherState: setOtherState
    });
  };
  const nameChangeHandler = event => {
    setPersonsState({
      persons: [
        { name: "Cameron", age: 24 },
        { name: event.target.value, age: 22 },
        { name: "Alexander", age: 21 },
        { name: "Clifford", age: 19 }
      ]
    });
  };

  const togglePersonsHandler = () => {
    const doesShow = personsState.showPersons;
    // console.log(personsState.showPersons);
    // console.log(doesShow);
    setPersonsState({ personsState: !doesShow });
  };

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };

  let persons = null;

  if(personsState.showPersons) {
    persons = (
      <div>
          <Person
            name={personsState.persons[0].name}
            age={personsState.persons[0].age}
          >
            My Hobbies: Gaming
          </Person>
          <Person
            name={personsState.persons[1].name}
            age={personsState.persons[1].age}
            click={switchNameHandler.bind(setPersonsState, "Fuck Boi")}
            chaged={togglePersonsHandler}
          >
            My Hobbies: Coding
          </Person>
          <Person
            name={personsState.persons[2].name}
            age={personsState.persons[2].age}
          >
            My Hobbies: Modeling
          </Person>
          <Person
            name={personsState.persons[3].name}
            age={personsState.persons[3].age}
          >
            My Hobbies: Smoking
          </Person>
        </div>
    );
  }
  return (
    <div className="App">
      <p>App</p>
      <button style={style} onClick={nameChangeHandler}>
        Switch Name
      </button>
      {persons}
    </div>
  );
};

export default App;
