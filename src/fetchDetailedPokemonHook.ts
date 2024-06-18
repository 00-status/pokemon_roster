import { useEffect, useState } from "react";

import { fetchPokemonHook } from "./fetchPokemonHook";

export type Pokemon = {
    name: string;
    weight: number;
    sprite: string;
};

export const fetchDetailedPokemonHook = (): Pokemon[] => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    const basicPokemon = fetchPokemonHook();

    useEffect(() => {
        const promises = basicPokemon.map(pokemon => makeAPICall(pokemon.url));
        Promise.all(promises).then((responses) => {
                const mappedPokemon = responses.map((detailedPokemon) => {
                    return {
                        name: detailedPokemon.name,
                        weight: detailedPokemon.weight,
                        sprite: detailedPokemon.sprites.front_default
                    };
                });

                setPokemons(mappedPokemon);
            }
        );
    }, [basicPokemon, makeAPICall]);

    return pokemons;

    // In PokemonHub:
    //      Fetch basic pokemon
    //      Create a list of URLs based on the basicPokemon
    //      queue up a bunch of requests with fetchAll
    //          Wait for the promises to finish
    //      map the detailed pokemon
    //      Return the detailed pokemon
};

async function makeAPICall(endpoint: string) {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  }
