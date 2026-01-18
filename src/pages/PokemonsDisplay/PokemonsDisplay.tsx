import { Button, Card, Loader } from '@/components';
import { Search } from 'lucide-react';
import React from 'react';
import SearchInput from './SearchInput';
import useFetchPokemon from './useFetchPokemon';

const PokemonsDisplay: React.FC = () => {
    const {
        pokemons,
        loading,
        fetchingMore,
        loadMore,
        searchTerm,
        setSearchTerm,
    } = useFetchPokemon();

    return (
        <div className="flex flex-col items-center px-4 py-6 md:p-8">
            <SearchInput value={searchTerm} onChange={setSearchTerm} />

            {loading ? (
                <Loader>Loading pokemons...</Loader>
            ) : (
                <>
                    <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {pokemons.length > 0 ? (
                            pokemons.map((poke) => (
                                <Card
                                    key={`${poke.id}-${poke.name}`}
                                    {...poke}
                                />
                            ))
                        ) : (
                            <div className="col-span-full flex flex-col items-center py-20 text-gray-500 dark:text-gray-400">
                                <div className="mb-4 rounded-full bg-gray-100 p-6 dark:bg-gray-800">
                                    <Search className="h-10 w-10 text-gray-300 dark:text-gray-600" />
                                </div>
                                <p className="text-xl font-medium text-gray-900 dark:text-white">
                                    No Pokemon found
                                </p>
                                <p>Try searching for a different name.</p>
                            </div>
                        )}
                    </div>

                    {pokemons.length > 0 && searchTerm === '' && (
                        <Button
                            onClick={loadMore}
                            disabled={fetchingMore}
                            className="mt-12 min-w-[200px] rounded-2xl bg-blue-600 py-4 text-sm font-bold tracking-widest text-white transition-all hover:bg-blue-700 hover:shadow-xl active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-blue-500 dark:hover:bg-blue-600"
                        >
                            {fetchingMore ? (
                                <span className="flex items-center justify-center gap-3">
                                    <div className="h-5 w-5 animate-spin rounded-full border-3 border-white/30 border-t-white" />
                                    FETCHING...
                                </span>
                            ) : (
                                'LOAD MORE'
                            )}
                        </Button>
                    )}
                </>
            )}
        </div>
    );
};

export default PokemonsDisplay;
