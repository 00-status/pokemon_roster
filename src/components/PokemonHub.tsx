import { useState } from "react";

import './pokemon-hub.css';
import { PokemonInventory } from "./PokemonInventory";
import { PokemonRoster } from "./PokemonRoster";
import { fetchPokemonHook } from "../fetchPokemonHook";

export const PokemonHub = () => {
    const [rosterPokemons, setRosterPokemons] = useState<string[]>([]);
    const pokemons = fetchPokemonHook();

    const addToRoster = (pokemon: string) => {
        if (rosterPokemons.length < 6) {
            setRosterPokemons((currentState) => [...currentState, pokemon]);
        }
    };
    
    return <div>
        <div className="pokemon-hub__inventory">
            <PokemonRoster rosterPokemons={rosterPokemons} />
            <PokemonInventory pokemons={pokemons} addToRoster={addToRoster} />
        </div>
        <div>
            Details
        </div>
    </div>;
};
