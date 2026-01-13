import React from 'react';
import { Link } from 'react-router';
import { routes } from '../../config';
import PokeShow from './components/PokeShow';
import TeamRowActions from './components/TeamRowActions';
import useFetchTeamData from './useFetchTeamData';

type TeamRowProps = {
    name: string;
    ids: number[];
    isActive: boolean;
    onSelect: (name: string) => void;
    onDelete: (name: string) => void;
};

const TeamRow: React.FC<TeamRowProps> = ({
    name,
    ids,
    isActive,
    onSelect,
    onDelete,
}) => {
    const { members, loading } = useFetchTeamData(ids);

    return (
        <div
            className={`group relative rounded-3xl p-1 transition-all duration-300 ${
                isActive
                    ? 'bg-blue-500 shadow-xl shadow-blue-500/20 dark:bg-yellow-500 dark:shadow-yellow-500/20'
                    : 'bg-gray-200 dark:bg-gray-700'
            }`}
        >
            <div className="rounded-[22px] bg-white p-6 dark:bg-gray-900">
                <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-black tracking-tight text-gray-800 uppercase dark:text-white">
                                {name}
                            </h3>
                            <div className="flex items-center gap-2">
                                <div
                                    className={`h-1.5 w-1.5 rounded-full ${isActive ? 'animate-pulse bg-blue-500' : 'bg-gray-300'}`}
                                />
                                <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                                    {isActive ? 'Active Squad' : 'Reserve Team'}
                                </span>
                            </div>
                        </div>
                    </div>

                    <TeamRowActions
                        isActive={isActive}
                        length={ids.length}
                        onDelete={() => onDelete(name)}
                        onSelect={() => onSelect(name)}
                    />
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
                    {loading ? (
                        Array.from({ length: ids.length || 1 }).map((_, i) => (
                            <div
                                key={i}
                                className="h-24 animate-pulse rounded-2xl bg-gray-100 dark:bg-gray-800"
                            />
                        ))
                    ) : ids.length === 0 ? (
                        <Link
                            to={routes.POKEMONS.url}
                            className="group/empty col-span-full flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-100 py-10 transition-colors hover:border-blue-200 dark:border-gray-800"
                        >
                            <span className="text-sm font-bold text-gray-400 group-hover/empty:text-blue-500 dark:group-hover/empty:text-yellow-500">
                                Empty Slot - Add Pokemon
                            </span>
                        </Link>
                    ) : (
                        members.map((poke) => <PokeShow {...poke} />)
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeamRow;
