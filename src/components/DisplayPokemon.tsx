import { getTypeColor } from '@/helper';
import type { Pokemon } from 'pokenode-ts';
import React from 'react';

export const DisplayPokemon: React.FC<Pokemon> = (data) => {
    const primaryColor = getTypeColor(data.types[0]?.type.name ?? 'normal');

    return (
        <div className="flex w-full max-w-2xl flex-col gap-8 rounded-3xl bg-white p-8 md:flex-row dark:bg-gray-900">
            <div className="flex flex-col items-center space-y-6 md:w-1/3">
                <div
                    className={`bg-opacity-10 relative flex h-48 w-48 items-center justify-center rounded-2xl ${primaryColor}`}
                >
                    <img
                        src={
                            data.sprites.other?.['official-artwork']
                                ?.front_default ??
                            data.sprites.front_default ??
                            ''
                        }
                        alt={data.name}
                        className="z-10 h-40 w-40 object-contain drop-shadow-xl"
                    />
                </div>

                <div className="text-center">
                    <span className="text-xs font-black tracking-widest text-gray-400">
                        #{data.id.toString().padStart(3, '0')}
                    </span>
                    <h2 className="text-4xl font-black tracking-tighter text-gray-900 capitalize dark:text-white">
                        {data.name}
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                    {data.types.map((t) => (
                        <span
                            key={t.type.name}
                            className={`rounded-lg px-4 py-1 text-xs font-bold tracking-wide text-white uppercase shadow-md ${getTypeColor(t.type.name)}`}
                        >
                            {t.type.name}
                        </span>
                    ))}
                </div>

                <div className="grid w-full grid-cols-2 gap-4 rounded-2xl bg-gray-50 p-4 dark:bg-gray-800">
                    <div className="text-center">
                        <p className="text-[10px] font-bold text-gray-400 uppercase">
                            Weight
                        </p>
                        <p className="font-bold text-gray-700 dark:text-gray-200">
                            {(data.weight / 10).toFixed(1)}kg
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-[10px] font-bold text-gray-400 uppercase">
                            Height
                        </p>
                        <p className="font-bold text-gray-700 dark:text-gray-200">
                            {(data.height / 10).toFixed(1)}m
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-1 flex-col gap-6">
                <section>
                    <h3 className="mb-4 text-sm font-black tracking-widest text-gray-500 uppercase dark:text-gray-400">
                        Base Stats
                    </h3>
                    <div className="space-y-3">
                        {data.stats.map((s) => (
                            <div
                                key={s.stat.name}
                                className="flex flex-col gap-1"
                            >
                                <div className="flex justify-between text-xs font-bold uppercase">
                                    <span className="text-gray-600 dark:text-gray-400">
                                        {s.stat.name.replace(
                                            'special-',
                                            'sp. ',
                                        )}
                                    </span>
                                    <span className="text-gray-900 dark:text-white">
                                        {s.base_stat}
                                    </span>
                                </div>
                                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                                    <div
                                        className={`h-full transition-all duration-1000 ${primaryColor}`}
                                        style={{
                                            width: `${Math.min((s.base_stat / 255) * 100, 100)}%`,
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="grid grid-cols-2 gap-6">
                    <section>
                        <h3 className="mb-2 text-sm font-black tracking-widest text-gray-500 uppercase dark:text-gray-400">
                            Abilities
                        </h3>
                        <div className="flex flex-col gap-2">
                            {data.abilities.map((a) => (
                                <span
                                    key={a.ability.name}
                                    className="w-fit rounded-md border border-gray-200 px-2 py-1 text-xs font-medium text-gray-600 capitalize dark:border-gray-700 dark:text-gray-300"
                                >
                                    {a.ability.name.replace('-', ' ')}
                                </span>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="mb-2 text-sm font-black tracking-widest text-gray-500 uppercase dark:text-gray-400">
                            Moves
                        </h3>
                        <div className="scrollbar-hide max-h-32 overflow-y-auto pr-2">
                            <div className="flex flex-wrap gap-1">
                                {data.moves.slice(0, 20).map((m) => (
                                    <span
                                        key={m.move.name}
                                        className="rounded-md bg-gray-100 px-2 py-1 text-[10px] font-bold text-gray-500 uppercase dark:bg-gray-800 dark:text-gray-400"
                                    >
                                        {m.move.name.replace('-', ' ')}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
