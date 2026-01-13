import { DisplayPokemon } from '@/components';
import { api } from '@/config';
import { useDialog, useTeams } from '@/context';
import { getTypeColor } from '@/helper';
import type { Pokemon } from 'pokenode-ts';

type Props = Pokemon;

const Card: React.FC<Props> = ({ id, name, sprites, types }) => {
    const { addPokemonToTeam } = useTeams();
    const imageUrl =
        sprites?.other?.['official-artwork']?.front_default ??
        sprites?.other?.dream_world?.front_default ??
        sprites?.front_default ??
        '';

    const { openDialog } = useDialog();
    const primaryType = types[0]?.type.name ?? 'normal';

    const handleClick = async () => {
        try {
            const data = await api.getPokemonById(id);
            if (data) {
                openDialog({
                    content: (
                        <DisplayPokemon
                            {...data}
                            onChoose={(pokemon) => {
                                addPokemonToTeam(pokemon.id);
                            }}
                        />
                    ),
                    wrapperProps: { className: 'rounded-[3rem]!' },
                });
            }
        } catch (error) {
            console.error('Failed to fetch Pokémon details:', error);
        }
    };

    return (
        <div
            onClick={handleClick}
            className="group flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
        >
            <div
                className={`flex flex-col items-center justify-center p-6 transition-colors ${getTypeColor(primaryType)} bg-opacity-10 dark:bg-opacity-20`}
            >
                <div className="mb-4 flex w-full items-center justify-between">
                    <span className="text-sm font-black tracking-tighter opacity-50 dark:text-white">
                        #{id.toString().padStart(3, '0')}
                    </span>
                    <div className="h-2 w-2 animate-pulse rounded-full bg-white shadow-[0_0_8px_white]" />
                </div>

                <img
                    src={imageUrl}
                    alt={name}
                    className="h-40 w-40 object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            <div className="flex flex-col items-center p-6 pt-4">
                <h3 className="text-2xl font-black tracking-tight text-gray-800 capitalize dark:text-white">
                    {name}
                </h3>

                <div className="mt-4 flex gap-2">
                    {types?.map((t) => (
                        <span
                            key={t.type.name}
                            className={`rounded-full px-4 py-1 text-xs font-bold tracking-wider text-white uppercase shadow-sm ${getTypeColor(
                                t.type.name,
                            )}`}
                        >
                            {t.type.name}
                        </span>
                    ))}
                </div>

                <div className="mt-6 h-1 w-12 rounded-full bg-gray-200 transition-all group-hover:w-24 group-hover:bg-blue-400 dark:bg-gray-700" />
            </div>
        </div>
    );
};

export default Card;
