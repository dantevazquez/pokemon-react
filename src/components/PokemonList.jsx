import { useState } from "react";
import { useEffect } from "react";

const URL = 'https://pokeapi.co/api/v2/pokemon';


const PokemonList = ({setSelectedPokemonId}) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [numPokemon, setNumPokemon] = useState(10); 

    const handleClick = (pokemonName) =>{
        console.log("name " + pokemonName);
        setSelectedPokemonId(pokemonName);
    }

    const handleNumPokemonChange = (event) => {
        setNumPokemon(event.target.value);
    };
    useEffect(() => {

        const fetchPokemon = async () => {
            try {
                const response = await fetch(`${URL}?limit=${numPokemon}`);
                const data = await response.json();
                setPokemonList(data.results);
            } catch (error) {
                console.error('Error fetching Pokemon:', error);
            }
        };

        fetchPokemon();
    }, [numPokemon]);

    return (
        <div id="pokemon-list">
            <p id="list-title">Pokemon List</p>
            <label htmlFor="numPokemon">Number of Pokemon:</label>
            <input
                type="number"
                id="numPokemon"
                value={numPokemon}
                onChange={handleNumPokemonChange}
            />
            <ul>
                {pokemonList.map((pokemon) => (
                    <li key={pokemon.name} onClick={() => handleClick(pokemon.name)}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
};
export default PokemonList;