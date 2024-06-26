
import './pokemon-inventory.css';
import { Pokemon } from "../fetchDetailedPokemonHook";
import { InventoryItem } from "./InventoryItem";
import { Spinner } from './Spinner';

type Props = {
    pokemons: Pokemon[];
    addToRoster: (pokemon: Pokemon) => void;
};

export const PokemonInventory = (props: Props) => {
    const {pokemons, addToRoster} = props;

    if (pokemons.length <= 0) {
        return <Spinner />;
    }

    return <div>
        <h2>Inventory</h2>
        <ul className="pokemon-inventory__grid">
            {pokemons.map((pokemon) => <InventoryItem key={pokemon.name} pokemon={pokemon} onClick={addToRoster} />)}
        </ul>
    </div>;
};
