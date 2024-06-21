import { useEffect, useState } from "react";

import { fetchPokemonHook } from "./fetchPokemonHook";
import { APIPokemon } from "./apiTypes";

export type Pokemon = {
    name: string;
    height: number;
    weight: number;
    sprite: string;
    types: string[];
};

export const fetchDetailedPokemonHook = (): Pokemon[] => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    const basicPokemon = fetchPokemonHook();

    useEffect(() => {
        const promises = basicPokemon.map(pokemon => makeAPICall(pokemon.url));
        Promise.all(promises).then((responses) => {
                const mappedPokemon = responses.map((detailedPokemon: APIPokemon) => {
                    const types = detailedPokemon.types.map(type => type.type.name);

                    return {
                        name: detailedPokemon.name,
                        height: detailedPokemon.height,
                        weight: detailedPokemon.weight,
                        sprite: detailedPokemon.sprites.front_default,
                        types: types
                    };
                });

                setPokemons(mappedPokemon);
            }
        );
    }, [basicPokemon, makeAPICall]);

    return pokemons;
};

async function makeAPICall(endpoint: string) {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  }
