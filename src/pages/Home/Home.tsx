import React from 'react';
import { Link } from 'react-router';
import { Button } from '../../components';
import { routes } from '../../config/routes';
import type { Props } from './types';

const Home: React.FC<Props> = () => {
    return (
        <div className="text-text font-poppins h-full">
            <section className="flex h-full flex-col items-center justify-center text-center">
                <div className="-translate-y-1/12">
                    <h1 className="text-text mb-4 text-6xl font-extrabold md:text-7xl dark:text-white">
                        Welcome to the Pokedex
                    </h1>
                    <p className="text-secondary max-w-2xl text-lg md:text-xl dark:text-gray-300">
                        This is a simple Pokedex website for you to browse
                        through Pokemons and build the amazing teams for you to
                        save
                    </p>
                    <Link to={routes.BUILDER.url}>
                        <Button className="mt-8">Start Exploring</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
