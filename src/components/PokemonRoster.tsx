
type Props = {
    rosterPokemons: string[];
};

export const PokemonRoster = (props: Props) => {
    return <div>
        <h2>Roster</h2>
        {props.rosterPokemons.map((pokemon) => <div key={pokemon}>{pokemon}</div>)}
    </div>;
};
