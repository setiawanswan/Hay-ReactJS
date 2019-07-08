import React from 'react';
import logo from './logo.svg';
import './App.css';

//Add Component
function Greeting(){
  return <h1>Hallo</h1> 
}

//Add Property
function GreetingAgain(props){
  return <h2>Hallo {props.name}</h2> 
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting/>
        <GreetingAgain name="My name is Hilman !!"/>
      </header>
    </div>
  );
}

export default App;
