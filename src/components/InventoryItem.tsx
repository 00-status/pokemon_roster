import './inventory-item.css';
import { Pokemon } from "../fetchDetailedPokemonHook";

type Props = {
    onClick: (pokemon: Pokemon) => void;
    pokemon: Pokemon;
};

export const InventoryItem = (props: Props) => {
    const { pokemon, onClick } = props;

    return <div className='inventory-item' onClick={() => onClick(pokemon)}>
        <div className='inventory-item__label' >{pokemon.name}</div>
        <img className='inventory-item__image' src={pokemon.sprite} alt={pokemon.name} />
    </div>;
};
