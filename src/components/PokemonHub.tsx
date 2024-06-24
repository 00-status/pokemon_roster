import { useState } from "react";

import './pokemon-hub.css';
import { PokemonInventory } from "./PokemonInventory";
import { PokemonRoster } from "./PokemonRoster";
import { Pokemon, fetchDetailedPokemonHook } from "../fetchDetailedPokemonHook";

export const PokemonHub = () => {
    const [rosterPokemons, setRosterPokemons] = useState<Pokemon[]>([]);

    const pokemons = fetchDetailedPokemonHook();

    const addToRoster = (pokemon: Pokemon) => {
        if (rosterPokemons.length < 6) {
            setRosterPokemons((currentState) => [...currentState, pokemon]);
        }
    };

    const removeFromRoster = (pokemonName: string) => {
        const rosterPokemonsClone = [...rosterPokemons];

        const indexToRemove = rosterPokemonsClone.findIndex((pokemon) => pokemon.name === pokemonName);

        if (indexToRemove >= 0) {
            rosterPokemonsClone.splice(indexToRemove, 1);
        }

        setRosterPokemons(rosterPokemonsClone);
    };

    // TODO: Add loading spinner

    // --gunmetal: #253031ff;
    // --jonquil: #ffcb05ff;
    // --ghost-white: #fffaffff;
    // --cerulean: #2978a0ff;
    // --columbia-blue: #c6e0ffff;
    
    return <div>
        <div className="pokemon-hub__inventory">
            <PokemonRoster rosterPokemons={rosterPokemons} removeFromRoster={removeFromRoster} />
            <PokemonInventory pokemons={pokemons} addToRoster={addToRoster} />
        </div>
    </div>;
};
