import { api } from '@/config';
import type { Pokemon } from 'pokenode-ts';
import { useEffect, useState } from 'react';

const useHome = () => {
    const [pokemons, setPokemons] = useState<Pokemon>();

    useEffect(() => {
        const getStuff = async () => {
            const pokemon = await api
                .getPokemonByName('luxray') // Make the request
                .catch(() => console.log('Oops!'));

            if (pokemon) {
                setPokemons(pokemon);
            }
        };

        getStuff();
    }, []);

    return { pokemons };
};

export default useHome;
