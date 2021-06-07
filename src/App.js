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
            <h1>Contruindo códigos com React</h1>
            <ul>
          <p>Criar aplicações utilizando o React.js de forma correta</p>
          <p>Usar conceitos de programação funcional em suas aplicações</p>
          <p>Criar aplicações com rotas, estados isolado e pré-renderização no lado do servidor</p>
          <p>Aplicar testes de vários tipos em suas aplicações</p>
            </ul>
        <img src={noode} className="App-noode" alt="noode" />
        
        <p>Silvio Façanha - Alceu Espreafico - Rafael Andrade</p>
    </header>
  </div>
  )
}


export default App;
