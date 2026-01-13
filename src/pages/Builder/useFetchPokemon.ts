import { api } from '@/config';
import type { Pokemon } from 'pokenode-ts';
import { useEffect, useState } from 'react';

const useFetchPokemon = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const data = await api.listPokemons();

                if (data?.results) {
                    const detailedPokemons = await Promise.all(
                        data.results.map(async (result) => {
                            const res = await fetch(result.url);
                            return res.json() as Promise<Pokemon>;
                        }),
                    );

                    setPokemons(detailedPokemons);
                }
            } catch (err) {
                console.error('Failed to fetch pokemons:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemons();
    }, []);

    return { pokemons, loading };
};

export default useFetchPokemon;
