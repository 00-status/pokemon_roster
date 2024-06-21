import { Pokemon } from "../fetchDetailedPokemonHook";
import { RosterItem } from "./RosterItem";

type Props = {
    rosterPokemons: Pokemon[];
    removeFromRoster: (pokemon: string) => void;
};

export const PokemonRoster = (props: Props) => {
    const {rosterPokemons, removeFromRoster} = props;

    return <div>
        <h2>Roster</h2>
        <ul>
            {rosterPokemons.map((pokemon) =>
                <RosterItem key={pokemon.name} pokemon={pokemon} onClick={removeFromRoster} />)}
        </ul>
    </div>;
};
