import React from 'react';
import './App.css';
import Person from './Person/Person';
function App() {
  return (
    <div className="App">
      <p>App</p>
      <Person name="Cameron" age="24" />
      <Person name="Robert" age="22">My Hobbies: Coding</Person>
      <Person name="Alex" age="21" />
      <Person name="Clifford" age="19" />
    </div>
  );
}

export default App;
