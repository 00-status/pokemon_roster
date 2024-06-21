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
            <div>
                {pokemon.name}
            </div>
            <div>
                {pokemon.types.map(typeName => typeName)}
            </div>
            <div>
                {pokemon.height / 10}m.
            </div>
            <div>
                {pokemon.weight / 10}kg.
            </div>
        </div>
        <button onClick={() => onClick(pokemon.name)}>Remove</button>
    </div>;
};
