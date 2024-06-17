import { Pokemon } from "../fetchPokemonHook";

type Props = {
    pokemons: Pokemon[];
    addToRoster: (pokemon: string) => void;
};

export const PokemonInventory = (props: Props) => {
    return <div>
        <h2>Inventory</h2>
        <ul>
            {props.pokemons.map(
                (pokemon) => <li key={pokemon.name}>
                        {pokemon.name} <button onClick={() => props.addToRoster(pokemon.name)}>Add Pokemon To Roster</button>
                    </li>)}
        </ul>
    </div>;
};
