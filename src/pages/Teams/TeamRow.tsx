import React from 'react';
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
            className={`rounded-3xl p-6 transition-all ${isActive ? 'bg-blue-50 ring-2 ring-blue-500 dark:bg-gray-800' : 'bg-white shadow-sm dark:bg-gray-900'}`}
        >
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-black tracking-tight uppercase dark:text-white">
                        {name}
                    </h3>
                    <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-bold text-gray-600 dark:bg-gray-700 dark:text-gray-400">
                        {ids.length}/6
                    </span>
                </div>
                <div className="flex gap-2">
                    {!isActive && (
                        <button
                            onClick={() => onSelect(name)}
                            className="text-sm font-bold text-blue-600 hover:underline"
                        >
                            Set Active
                        </button>
                    )}
                    <button
                        onClick={() => onDelete(name)}
                        className="text-sm font-bold text-red-500 hover:underline"
                    >
                        Delete
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
                {loading ? (
                    <div className="col-span-full flex h-24 animate-pulse items-center justify-center text-gray-400">
                        Loading team members...
                    </div>
                ) : ids.length === 0 ? (
                    <div className="col-span-full rounded-2xl border-2 border-dashed border-gray-100 py-8 text-center text-sm text-gray-400 italic">
                        No Pokemon in this team yet.
                    </div>
                ) : (
                    members.map((poke) => (
                        <div
                            key={poke.id}
                            className="flex flex-col items-center rounded-xl bg-gray-50 p-2 dark:bg-gray-800"
                        >
                            <img
                                src={poke.sprites.front_default ?? ''}
                                alt={poke.name}
                                className="h-16 w-16 object-contain"
                            />
                            <p className="text-[10px] font-bold tracking-tighter text-gray-500 uppercase">
                                {poke.name}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default TeamRow;
