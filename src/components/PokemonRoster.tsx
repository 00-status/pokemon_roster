import { Pokemon } from "../fetchDetailedPokemonHook";

type Props = {
    rosterPokemons: Pokemon[];
    removeFromRoster: (pokemon: string) => void;
};

export const PokemonRoster = (props: Props) => {
    return <div>
        <h2>Roster</h2>
        {props.rosterPokemons.map((pokemon) =>
            <div key={pokemon.name}> <img src={pokemon.sprite} alt={pokemon.name} /> {pokemon.name} <button onClick={() => props.removeFromRoster(pokemon.name)}>Remove</button></div>)}
    </div>;
};
