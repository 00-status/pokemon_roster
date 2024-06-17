
type Props = {
    rosterPokemons: string[];
};

export const PokemonRoster = (props: Props) => {
    return <div>
        {props.rosterPokemons.map((pokemon) => <div key={pokemon}>{pokemon}</div>)}
    </div>;
};
