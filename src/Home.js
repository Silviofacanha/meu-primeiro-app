import React from "react";
import logo from './imglogo.gif';
import noode from './noode.jpg';
import './App.css';
import Header from './Header'



function App(){
   let contador = 0;
  function increment (){
    contador++;
    console.log (contador);
    
  }

  return (
  <div className="App">
    <header className="App-header">
    <Header title= "Grupo React" />
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      <input type="button" value="Clique" onClick={increment} />
    </p>
    <p>{contador}</p> cliques!
    <h1>Hello mundo!</h1>
    <p>Silvio Façanha - Alceu - Rafael</p>
    <img src={noode} className="App-noode" alt="noode" />
    </header>
  </div>
  )
}


export default App;
