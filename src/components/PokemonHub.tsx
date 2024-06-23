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

    // TODO:
    //      Fetch Pokemon by generation
    //      Add loading spinner
    //      Change Add button to be a click + hover.
    //      Styling
    //          Add Roster min-width so page doesn't jump around.
    //          Choose colour scheme
    //              Inventory hover styling
    //              RosterItem background colour
    //          Add font styles
    //          Hide overflow of inventory
    //          Change button to be onClick and hover
    //          Change "Remove" button to be an "X" button
    //          Add gap between roster items
    //          Bold pokemon names

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
