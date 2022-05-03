import './Pokecard.css';

function Pokecard(props) {
  const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  return (
    <div className="Pokecard">
      <h2>{props.name}</h2>
      <img src={`${baseURL}${props.id}.png`}/>
      <h4>Type: {props.type}</h4>
      <h4>Base Experience: {props.base_experience}</h4>
    </div>
  );
}

export default Pokecard;
