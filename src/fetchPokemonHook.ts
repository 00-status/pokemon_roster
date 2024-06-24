import { useEffect, useState } from "react";

export type BasicPokemon = {
    name: string,
    url: string
};

export const fetchPokemonHook = (): BasicPokemon[] => {
    const [pokemons, setPokemons] = useState<BasicPokemon[]>([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(response => response.json())
            .then((pokemons) => {
                setPokemons(pokemons.results);
            });
    }, [setPokemons]);

    return pokemons;
};
