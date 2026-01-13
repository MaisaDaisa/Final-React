type Props = {
    length: number;
    isActive: boolean;
    onSelect: VoidFunction;
    onDelete: VoidFunction;
};

const TeamRowActions: React.FC<Props> = ({
    length,
    isActive,
    onDelete,
    onSelect,
}) => {
    return (
        <div className="flex items-center gap-4">
            <div className="mr-2 hidden flex-col items-end sm:flex">
                <span className="text-[10px] font-black text-gray-400 uppercase">
                    Capacity
                </span>
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                    {length} / 6
                </span>
            </div>

            <div className="flex gap-2">
                {!isActive && (
                    <button
                        onClick={onSelect}
                        className="rounded-lg bg-blue-50 px-4 py-2 text-xs font-black text-blue-600 transition-colors hover:cursor-pointer hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400"
                    >
                        ACTIVATE
                    </button>
                )}
                <button
                    onClick={onDelete}
                    className="rounded-lg bg-red-50 px-4 py-2 text-xs font-black text-red-500 transition-colors hover:cursor-pointer hover:bg-red-100 dark:bg-red-900/20"
                >
                    DELETE
                </button>
            </div>
        </div>
    );
};

export default TeamRowActions;
