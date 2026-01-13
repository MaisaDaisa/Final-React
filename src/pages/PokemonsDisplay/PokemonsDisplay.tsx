import { Card } from '@/components';
import React from 'react';
import useFetchPokemon from './useFetchPokemon';

const PokemonsDisplay: React.FC = () => {
    const { pokemons, loading, fetchingMore, loadMore } = useFetchPokemon();

    if (loading) {
        return (
            <div className="flex h-64 items-center justify-center font-bold text-gray-500">
                Loading Pokedex...
            </div>
        );
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
                <button
                    onClick={loadMore}
                    disabled={fetchingMore}
                    className="mt-12 flex items-center justify-center rounded-xl bg-blue-600 px-8 py-3 font-black tracking-widest text-white uppercase shadow-lg transition-all hover:bg-blue-700 hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {fetchingMore ? (
                        <span className="flex items-center gap-2">
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            Loading...
                        </span>
                    ) : (
                        'Load More Pokemon'
                    )}
                </button>
            )}
        </div>
    );
};

export default PokemonsDisplay;
