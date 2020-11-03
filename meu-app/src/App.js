import React from 'react';
import './App.css';

import MeuComponente, { MeusComponentes } from './components/MeuComponent';

function App() {
  const nome = 'TreinaWeb';
  const MeuCompenenteEscolhido = MeusComponentes[nome];
  return (
    <div className="App">
      <MeuComponente />
      <MeuCompenenteEscolhido />
    </div>
  );
}

export default App;
