import { api } from '@/config';
import type { Pokemon } from 'pokenode-ts';
import { useCallback, useEffect, useState } from 'react';

const LIMIT = 20;

const useFetchPokemon = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(true);
    const [fetchingMore, setFetchingMore] = useState(false);
    const [offset, setOffset] = useState(0);

    const fetchPokemons = useCallback(
        async (currentOffset: number, isMore: boolean) => {
            try {
                if (isMore) setFetchingMore(true);
                else setLoading(true);

                const data = await api.listPokemons(currentOffset, LIMIT);

                if (data?.results) {
                    const detailedPokemons = await Promise.all(
                        data.results.map(async (result) => {
                            const res = await fetch(result.url);
                            return res.json() as Promise<Pokemon>;
                        }),
                    );

                    setPokemons((prev) =>
                        isMore
                            ? [...prev, ...detailedPokemons]
                            : detailedPokemons,
                    );
                }
            } catch (err) {
                console.error('Failed to fetch pokemons:', err);
            } finally {
                setLoading(false);
                setFetchingMore(false);
            }
        },
        [],
    );

    useEffect(() => {
        fetchPokemons(0, false);
    }, [fetchPokemons]);

    const loadMore = () => {
        const nextOffset = offset + LIMIT;
        setOffset(nextOffset);
        fetchPokemons(nextOffset, true);
    };

    return { pokemons, loading, fetchingMore, loadMore };
};

export default useFetchPokemon;
