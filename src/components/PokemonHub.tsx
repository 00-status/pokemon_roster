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

    // TODO: Allow duplicate pokemon
    return <div>
        <div className="pokemon-hub__inventory">
            <PokemonRoster rosterPokemons={rosterPokemons} removeFromRoster={removeFromRoster} />
            <PokemonInventory pokemons={pokemons} addToRoster={addToRoster} />
        </div>
    </div>;
};
