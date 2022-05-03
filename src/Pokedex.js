import Pokecard from './Pokecard';
import './Pokedex.css';

function Pokedex(props) {
  return (
    <div className="Pokedex">
      {/* Handle input from App */}
      {props.newPokemon.map(pokemon => (
        // value has keys of base_experience, id, name, type
        <Pokecard
          base_experience={pokemon.base_experience}
          id={pokemon.id}
          name={pokemon.name}
          type={pokemon.type}
        />
      ))}

      {/* Add all default pokemon */}
      {props.defaultPokemon.map(pokemon => (
        // value has keys of base_experience, id, name, type
        <Pokecard
          base_experience={pokemon.base_experience}
          id={pokemon.id}
          name={pokemon.name}
          type={pokemon.type}
        />
      ))}

    </div>
  );
}

// Set default props
let defaultPokemon = [
  {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
  {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
  {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
  {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
  {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
  {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
];
Pokedex.defaultProps = {defaultPokemon}


export default Pokedex;
