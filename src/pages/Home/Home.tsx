import React from 'react';
import { Button } from '../../components';
import type { Props } from './types';

const Home: React.FC<Props> = () => {
    return (
        <div className="text-text font-poppins h-full">
            <section className="flex h-full -translate-y-1/12 flex-col items-center justify-center text-center">
                <h1 className="text-text mb-4 text-6xl font-extrabold md:text-7xl dark:text-white">
                    Welcome to the Pokedex
                </h1>
                <p className="text-secondary max-w-2xl text-lg md:text-xl dark:text-gray-300">
                    This is a simple Pokedex website for you to browse through
                    Pokemons and build the amazing teams for you to save
                </p>
                <Button className="mt-8">Start Exploring</Button>
            </section>
        </div>
    );
};

export default Home;
