import { Button, Card, Loader } from '@/components';
import React from 'react';
import useFetchPokemon from './useFetchPokemon';

const PokemonsDisplay: React.FC = () => {
    const { pokemons, loading, fetchingMore, loadMore } = useFetchPokemon();

    if (loading) {
        return <Loader>Loading pokemons...</Loader>;
    }

    return (
        <div className="flex flex-col items-center px-2 py-1 md:p-4">
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {pokemons.length > 0 ? (
                    pokemons.map((poke) => (
                        <Card key={`${poke.id}-${poke.name}`} {...poke} />
                    ))
                ) : (
                    <div className="col-span-full text-center">
                        No Pokemon found
                    </div>
                )}
            </div>

            {pokemons.length > 0 && (
                <Button
                    onClick={loadMore}
                    disabled={fetchingMore}
                    className="mt-12 flex items-center justify-center rounded-xl px-8 py-3 font-black tracking-widest text-white uppercase shadow-lg transition-all disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {fetchingMore ? (
                        <span className="flex items-center gap-2">
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            Loading...
                        </span>
                    ) : (
                        'Load More Pokemon'
                    )}
                </Button>
            )}
        </div>
    );
};

export default PokemonsDisplay;
