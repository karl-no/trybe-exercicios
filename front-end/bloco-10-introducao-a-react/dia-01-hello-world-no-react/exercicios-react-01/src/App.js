import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['malhar', 'trabalhar', 'estudar'];

class App extends React.Component {
  render() {
    return (
      <ul>{ compromissos.map((compromisso) => Task(compromisso)) }</ul>
    );
  }
}

export default App;
