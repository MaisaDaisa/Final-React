import { Home, PokemonsDisplay, Teams } from '../pages';

export const routes = {
    HOME: {
        url: '/',
        component: Home,
        title: 'Home',
    },
    POKEMONS: {
        url: '/pokemons',
        component: PokemonsDisplay,
        title: 'Pokemons',
    },
    TEAMS: {
        url: '/teams',
        component: Teams,
        title: 'Teams',
    },
};
