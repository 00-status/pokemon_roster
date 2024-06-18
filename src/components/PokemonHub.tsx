import { useState } from "react";

import './pokemon-hub.css';
import { PokemonInventory } from "./PokemonInventory";
import { PokemonRoster } from "./PokemonRoster";
import { fetchPokemonHook } from "../fetchPokemonHook";
import { fetchDetailedPokemonHook } from "../fetchDetailedPokemonHook";

export const PokemonHub = () => {
    const [rosterPokemons, setRosterPokemons] = useState<string[]>([]);

    const pokemons = fetchDetailedPokemonHook();

    const addToRoster = (pokemon: string) => {
        if (rosterPokemons.length < 6) {
            setRosterPokemons((currentState) => [...currentState, pokemon]);
        }
    };

    const removeFromRoster = (pokemon: string) => {
        const rosterPokemonsClone = [...rosterPokemons];

        const indexToRemove = rosterPokemonsClone.indexOf(pokemon);

        if (indexToRemove >= 0) {
            rosterPokemonsClone.splice(indexToRemove, 1);
        }

        setRosterPokemons(rosterPokemonsClone);
    };
    
    return <div>
        <div className="pokemon-hub__inventory">
            <PokemonRoster rosterPokemons={rosterPokemons} removeFromRoster={removeFromRoster} />
            <PokemonInventory pokemons={pokemons} addToRoster={addToRoster} />
        </div>
        <div>
            Details
        </div>
    </div>;
};
