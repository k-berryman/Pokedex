import './App.css';
import Pokedex from './Pokedex';

function App() {
  let newPokemon = [
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178}
  ];

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex newPokemon={newPokemon}/>
    </div>
  );
}

export default App;
