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
        <div className="roster-item__contents">
            <div>
                <div className="roster-item__label">
                    <div>
                        {pokemon.name}
                    </div>
                    {pokemon.types.map(typeName => <div className='roster-item__pill'>{typeName}</div>)}
                </div>
                <div>
                    <b>Height:</b> {pokemon.height / 10}m.
                </div>
                <div>
                    <b>Weight:</b> {pokemon.weight / 10}kg.
                </div>
            </div>
            <button className='roster-item__button' onClick={() => onClick(pokemon.name)}>X</button>
        </div>
    </div>;
};
