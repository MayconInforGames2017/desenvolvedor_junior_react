import React, { Component } from 'react';
import './App.css';

import MeuComponente, { MeusComponentes } from './components/MeuComponent';

class App extends Component {
  render() {
    const dados = {
      nome: "João",
      sobrenome: "Paulo",
      idade: 25
    }
    return (
      <div className="App">
        <MeuComponente {...dados}/>
      </div>
    );
  }

}

export default App;
