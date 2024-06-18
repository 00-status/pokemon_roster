
type Props = {
    rosterPokemons: string[];
    removeFromRoster: (pokemon: string) => void;
};

export const PokemonRoster = (props: Props) => {
    return <div>
        <h2>Roster</h2>
        {props.rosterPokemons.map((pokemon) =>
            <div key={pokemon}>{pokemon} <button onClick={() => props.removeFromRoster(pokemon)}>Remove</button></div>)}
    </div>;
};
