import { useDialog } from '@/context';
import { getTypeColor } from '@/helper';
import type { Pokemon } from 'pokenode-ts';

type Props = Pokemon;

const Card: React.FC<Props> = ({ id, name, sprites, types }) => {
    const imageUrl = sprites?.front_default ?? '';
    const { openDialog } = useDialog();

    const handleClick = () => {
        openDialog('Hello', <div>Hello</div>);
    };

    return (
        <div
            onClick={handleClick}
            className="mt-15 flex transform cursor-pointer flex-col items-center rounded-2xl border-4 border-yellow-400 bg-white p-4 text-center shadow-lg transition-transform hover:scale-105 dark:bg-gray-800"
        >
            <div className="relative h-30 w-60">
                <img
                    src={imageUrl}
                    alt={name}
                    className="absolute -top-25 mb-2 size-60 object-contain"
                />
            </div>

            <p className="text-sm font-bold text-gray-600 dark:text-gray-300">
                #{id}
            </p>
            <h3 className="text-xl font-extrabold text-gray-900 capitalize dark:text-white">
                {name}
            </h3>

            <div className="mt-2 flex gap-2">
                {types?.map((t) => (
                    <span
                        key={t.type.name}
                        className={`rounded-full px-2 py-1 text-xs font-semibold capitalize ${getTypeColor(
                            t.type.name,
                        )}`}
                    >
                        {t.type.name}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Card;
