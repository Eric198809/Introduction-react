import './App.css'
import PokemonCard from './components/PokemonCard'
import { useState } from 'react'
import NavBar from './components/NavBar';

function App() {

  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

  const [pokemonIndex, setPokemonIndex] = useState(0);
  const selectedPokemon = pokemonList[pokemonIndex]

  const PrevClick = () => {
    if (pokemonIndex > 0)
    setPokemonIndex(pokemonIndex - 1)
  }

  const NextClick = () => {
    if (pokemonIndex < pokemonList.length - 1)
    setPokemonIndex(pokemonIndex + 1)

  }

  
  return (
    <div>
    <PokemonCard pokemon = {selectedPokemon}/>
    <NavBar PrevClick={PrevClick} NextClick={NextClick}/>
    
    </div>
    
  );
}

export default App

