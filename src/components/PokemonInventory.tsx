import { Pokemon } from "../fetchDetailedPokemonHook";
import { InventoryItem } from "./InventoryItem";

type Props = {
    pokemons: Pokemon[];
    addToRoster: (pokemon: Pokemon) => void;
};

export const PokemonInventory = (props: Props) => {
    const {pokemons, addToRoster} = props;

    return <div>
        <h2>Inventory</h2>
        <ul>
            {pokemons.map((pokemon) => <InventoryItem pokemon={pokemon} onClick={addToRoster} />)}
        </ul>
    </div>;
};
