import React from 'react';
import './App.css';

const Pet = (props) => {
  return(
    <div>
      <p>My pet is {props.petName}</p>
    </div>
  )
}

const Person = (props) => {
  return (
    <div>
      <p>My name is {props.name} and I am {props.age} year(s) old!</p>
      <Pet petName = {props.pet} />
    </div>
  );
}

function App() {
  return (
    <div className = "App">
      <h1>My React Project</h1>
    <Person name = "Larry" age = {25} pet = "Poppy"/>
    <Person name = "Curly" age = {26} pet = "Prince"/>
    <Person name = "Mo" age = {25} pet = "Bessie"/>
    </div>
  );
}

export default App;

//the class component below is equivalent to the function component above

// class App extends React.Component {
//   render(){  //must have render method
//     return(
//       <div className = "App">
//         <h1>This is a class component</h1>
//       </div>
//     )
//   }
// }


