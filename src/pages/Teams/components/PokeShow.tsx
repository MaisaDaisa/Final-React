import { getTypeColor } from '@/helper';
import type { Pokemon } from 'pokenode-ts';
import React from 'react';

const PokeShow: React.FC<Pokemon> = (poke) => {
    return (
        <div
            key={poke.id}
            className="group/poke relative flex flex-col items-center overflow-hidden rounded-2xl border border-gray-50 bg-white p-3 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-800"
        >
            <div
                className={`absolute top-0 h-1 w-full ${getTypeColor(poke.types[0].type.name)}`}
            />

            <img
                src={
                    poke.sprites.other?.['official-artwork']?.front_default ??
                    poke.sprites.front_default ??
                    ''
                }
                alt={poke.name}
                className="h-16 w-16 object-contain drop-shadow-md transition-transform group-hover/poke:scale-110"
            />
            <p className="mt-2 w-full truncate text-center text-[9px] font-black tracking-tighter text-gray-400 uppercase">
                {poke.name}
            </p>
        </div>
    );
};

export default PokeShow;
