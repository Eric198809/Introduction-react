import './App.css'
import PokemonCard from './components/PokemonCard'

function App() {

  const pokemonList = [
    {
      name: "BULBASAUR",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "MEW",
    },
  ];
  
  return (
    <PokemonCard pokemon = {pokemonList[1]}/>
    
  );
}

export default App

