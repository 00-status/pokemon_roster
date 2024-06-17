import { useState } from "react";
import { PokemonInventory } from "./PokemonInventory";
import { PokemonRoster } from "./PokemonRoster";
import { fetchPokemonHook } from "../fetchPokemonHook";

export const PokemonHub = () => {
    const [rosterPokemons, setRosterPokemons] = useState<string[]>([]);
    const pokemons = fetchPokemonHook();

    // Call pokemon API hook to get roster.

    const addToRoster = (pokemon: string) => {
        if (rosterPokemons.length < 6) {
            setRosterPokemons((currentState) => [...currentState, pokemon]);
        }
    };
    
    return <div>
        <PokemonRoster rosterPokemons={rosterPokemons} />
        <PokemonInventory pokemons={pokemons} addToRoster={addToRoster} />
    </div>;
};
