import { Pokemon } from "../fetchDetailedPokemonHook";

type Props = {
    pokemons: Pokemon[];
    addToRoster: (pokemon: string) => void;
};

// TODO: Create an InventoryItem to help with readability
export const PokemonInventory = (props: Props) => {
    return <div>
        <h2>Inventory</h2>
        <ul>
            {props.pokemons.map(
                (pokemon) => <div key={pokemon.name}>
                        <img src={pokemon.sprite} alt={pokemon.name} /> {pokemon.name} <button onClick={() => props.addToRoster(pokemon.name)}>Add</button>
                    </div>)}
        </ul>
    </div>;
};
