import { Search, X } from 'lucide-react';
import React from 'react';

type Props = {
    value: string;
    onChange: (value: string) => void;
};

const SearchInput: React.FC<Props> = ({ value, onChange }) => {
    return (
        <div className="relative mb-12 w-full max-w-xl">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <Search className="h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
            <input
                type="text"
                placeholder="Search Pokemon by name..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded-2xl border-none bg-white py-4 pr-12 pl-12 text-lg shadow-md ring-1 ring-gray-200 transition-all placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:placeholder:text-gray-500"
            />
            {value && (
                <button
                    onClick={() => onChange('')}
                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 transition-colors hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                >
                    <X className="h-5 w-5" />
                </button>
            )}
        </div>
    );
};

export default SearchInput;
