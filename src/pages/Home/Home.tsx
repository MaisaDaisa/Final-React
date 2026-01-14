import { Button, StarBackground } from '@/components';
import { routes } from '@/config';
import React from 'react';
import { Link } from 'react-router';
import type { Props } from './types';

const Home: React.FC<Props> = () => {
    return (
        <div className="font-poppins relative h-full w-full overflow-hidden">
            <StarBackground />
            <section className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
                <div className="flex -translate-y-8 flex-col items-center">
                    <h1 className="mb-6 max-w-4xl text-5xl leading-[1.1] font-black tracking-tight text-gray-900 md:text-8xl dark:text-white">
                        Master Your <br />
                        <span className="text-red-600">Pokedex</span>
                    </h1>

                    <p className="max-w-xl text-lg leading-relaxed text-gray-600 md:text-xl dark:text-gray-400">
                        This is a simple Pokedex website for you to browse
                        through Pokemons and build the amazing teams for you to
                        save
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <Link to={routes.POKEMONS.url}>
                            <Button>Start Exploring</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
