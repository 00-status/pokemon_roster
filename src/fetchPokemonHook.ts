import { useEffect, useState } from "react";

export type Pokemon = {
    name: string,
    url: string
};

export const fetchPokemonHook = (): Pokemon[] => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then((pokemons) => {
                setPokemons(pokemons.results);
            });
    }, [setPokemons]);

    return pokemons;
};
