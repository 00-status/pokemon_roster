import './roster-item.css';
import { Pokemon } from "../fetchDetailedPokemonHook";

type Props = {
    pokemon: Pokemon;
    onClick: (pokemonName: string) => void;
};

export const RosterItem = (props: Props) => {
    const { pokemon, onClick } = props;
    return <div className="roster-item">
        <img className="roster-item__image" src={pokemon.sprite} alt={pokemon.name} />
        <div className="roster-item__label">
            {pokemon.name}
            {pokemon.types.map(typeName => typeName)}
        </div>
        <button onClick={() => onClick(pokemon.name)}>Remove</button>
    </div>;
};
