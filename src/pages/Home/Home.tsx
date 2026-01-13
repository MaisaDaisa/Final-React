import { Card } from '@/components';
import React from 'react';
import type { Props } from './types';
import useHome from './useHome';

const Home: React.FC<Props> = () => {
    const { pokemons, loading } = useHome();

    if (loading) return <div>Loading...</div>;

    return (
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {pokemons.length > 0 ? (
                pokemons.map((poke) => <Card key={poke.id} {...poke} />)
            ) : (
                <div>No Pokémon found</div>
            )}
        </div>
    );
};

export default Home;
