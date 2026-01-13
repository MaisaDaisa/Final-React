import React from 'react';
import type { Props } from './types';
import useHome from './useHome';

const Home: React.FC<Props> = (props) => {
    const { pokemons } = useHome();
    return <div>{pokemons?.name}</div>;
};

export default Home;
