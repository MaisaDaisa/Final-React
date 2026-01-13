export const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
        case 'normal':
            return 'bg-gray-400 text-white';
        case 'fire':
            return 'bg-red-500 text-white';
        case 'water':
            return 'bg-blue-500 text-white';
        case 'electric':
            return 'bg-yellow-400 text-black';
        case 'grass':
            return 'bg-green-500 text-white';
        case 'ice':
            return 'bg-cyan-200 text-black';
        case 'fighting':
            return 'bg-red-700 text-white';
        case 'poison':
            return 'bg-purple-500 text-white';
        case 'ground':
            return 'bg-yellow-600 text-white';
        case 'flying':
            return 'bg-indigo-300 text-black';
        case 'psychic':
            return 'bg-pink-500 text-white';
        case 'bug':
            return 'bg-green-700 text-white';
        case 'rock':
            return 'bg-gray-600 text-white';
        case 'ghost':
            return 'bg-indigo-900 text-white';
        case 'dragon':
            return 'bg-purple-800 text-white';
        case 'dark':
            return 'bg-gray-800 text-white';
        case 'steel':
            return 'bg-gray-500 text-white';
        case 'fairy':
            return 'bg-pink-300 text-black';
        default:
            return 'bg-gray-300 text-black';
    }
};
