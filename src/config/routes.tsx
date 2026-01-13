import { Home, PokemonsDisplay } from '../pages';

export const routes = {
    HOME: {
        url: '/',
        component: Home,
        title: 'Home',
    },
    POKEMONS: {
        url: '/pokemons',
        component: PokemonsDisplay,
        title: 'Pokemon',
    },
};
