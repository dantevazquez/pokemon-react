import { useState } from "react";
import { useEffect } from "react";
const SelectedPokemon = ({ setSelectedPokemonId, selectedPokemonId}) =>{

    console.log("sel" + selectedPokemonId);
    console.log("other " + setSelectedPokemonId);
    const URL = 'https://pokeapi.co/api/v2/pokemon/';

    const [pokemon, setPokemon] = useState(null);


    useEffect(() => {

        const fetchPokemon = async () => {
            try {
                const response = await fetch(URL + selectedPokemonId);
                const data = await response.json();
                setPokemon(data);
            } catch (error) {
                console.error('Error fetching Pokemon:', error);
            }
        };

        fetchPokemon();
    }, []);

    console.log("printing poke state" + pokemon);

    const backButton = () =>{
        setSelectedPokemonId(null);

    }

    return(

        <div>
        {pokemon ? (
            <div>
                <p>Pokemon Details</p>
                <p>Name: {pokemon.name}</p>
                <p>Weight: {pokemon.weight}</p>
                <p>Height: {pokemon.height}</p>
                <p>Abilities: </p>
                {pokemon.abilities.map((ability, index) => (
                    <li key={index}>{ability.ability.name}</li>
                ))}


            </div>
        ) : (
            <p>Loading...</p>
        )}

        <button onClick={backButton}>Back to List</button>


    </div>
    );
}
export default SelectedPokemon;