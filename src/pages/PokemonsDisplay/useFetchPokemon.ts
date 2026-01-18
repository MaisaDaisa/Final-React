import { api } from '@/config';
import type { Pokemon } from 'pokenode-ts';
import { useCallback, useEffect, useState } from 'react';

const LIMIT = 20;

const useFetchPokemon = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(true);
    const [fetchingMore, setFetchingMore] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [offset, setOffset] = useState(0);

    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 700);
        return () => clearTimeout(handler);
    }, [searchTerm]);

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
        const search = async () => {
            if (!debouncedSearchTerm.trim()) {
                setOffset(0);
                fetchPokemons(0, false);
                return;
            }

            setIsSearching(true);
            try {
                const data = await api.getPokemonByName(
                    debouncedSearchTerm.toLowerCase(),
                );
                setPokemons([data]);
            } catch (err) {
                setPokemons([]);
                console.error('Pokemon not found:', err);
            } finally {
                setIsSearching(false);
            }
        };

        search();
    }, [debouncedSearchTerm, fetchPokemons]);

    const loadMore = () => {
        if (debouncedSearchTerm) return;
        const nextOffset = offset + LIMIT;
        setOffset(nextOffset);
        fetchPokemons(nextOffset, true);
    };

    return {
        pokemons,
        loading: loading || isSearching,
        fetchingMore,
        loadMore,
        searchTerm,
        setSearchTerm,
    };
};

export default useFetchPokemon;
