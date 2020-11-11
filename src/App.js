import React, {Component} from 'react';
import Pokedex from './pokedex/Pokedex'
import Pokegame from './pokegame/Pokegame';
import './App.css';


function App() {
  return (
    <div className="App">
      <Pokedex/>
      <Pokegame/>
    </div>
  );
}

export default App;
