import { useState } from "react";
import { PokemonInventory } from "./PokemonInventory";
import { PokemonRoster } from "./PokemonRoster";

export const PokemonHub = () => {
    const [rosterPokemons, setRosterPokemons] = useState<string[]>([]);
    // Call API hook.

    const addToRoster = (pokemon: string) => {
        // Clone the rosterPokemons array
        // If the array is at 6 already
        //      don't do anything
        // else
        //      add the pokemon to the clone
        // set the rosterPokemons to the clone
    };
    
    return <div>
        <PokemonRoster rosterPokemons={rosterPokemons} />
        <PokemonInventory pokemons={[]} addToRoster={addToRoster} />
    </div>;
};
