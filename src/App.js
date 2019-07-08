import React from 'react';
import logo from './logo.svg';
import './App.css';

//Add Component
function Greeting(){
  return <h1>Hallo</h1> 
}

//Add Property
function GreetingAgain(props){
  return <h2>Hallo {props.name} <Gender gender={props.gender} /></h2> //This Gender component in GreetingAgin Component
}

//Add component in Component
function Gender(props){
  return <span>My gender {props.gender} </span>
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting/>
        <GreetingAgain name="My name is Hilman !!" age="20" gender="Man"/>
      </header>
    </div>
  );
}

export default App;
