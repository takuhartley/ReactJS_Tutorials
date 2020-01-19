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
    otherState: "some other value"
  });
  const [otherState, setOtherState] = useState('some other value');
  console.log(personsState, otherState);

  const switchNameHandler = () => {
    //console.log('Was clicked!');
    setPersonsState({
      persons: [
        { name: "Cam", age: 24 },
        { name: "Rob", age: 22 },
        { name: "Alex", age: 21 },
        { name: "Cliff", age: 19 }
      ],
      otherState: setOtherState
    });
  };

  return (
    <div className="App">
      <p>App</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      >
        My Hobbies: Gaming
      </Person>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
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
};

export default App;
