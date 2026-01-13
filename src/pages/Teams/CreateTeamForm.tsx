import { Button } from '@/components';
import { Plus } from 'lucide-react';
import React, { useState } from 'react';

type CreateTeamFormProps = {
    onConfirm: (name: string) => void;
};

const CreateTeamForm: React.FC<CreateTeamFormProps> = ({ onConfirm }) => {
    const [name, setName] = useState('');

    const handleSubmit = () => {
        if (name.trim()) {
            onConfirm(name);
        }
    };

    return (
        <div className="flex flex-col gap-6 rounded-2xl bg-white p-6 text-left dark:bg-gray-900">
            <div className="flex items-center gap-3">
                <div>
                    <h2 className="text-xl leading-none font-black tracking-tight text-gray-900 uppercase dark:text-white">
                        Create Team
                    </h2>
                    <p className="mt-1 text-xs font-medium text-gray-500">
                        Build your squad for the next challenge
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label className="ml-1 text-[10px] font-black text-gray-400 uppercase">
                    Team Name
                </label>
                <div className="group relative">
                    <input
                        autoFocus
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                        placeholder="BTU Rockets!"
                        className="w-full rounded-xl border-2 border-gray-100 bg-gray-50 p-3 text-sm font-semibold transition-all outline-none focus:border-red-500 focus:bg-white dark:border-gray-800 dark:bg-gray-800/50 dark:text-white dark:focus:border-red-500 dark:focus:bg-gray-800"
                    />
                </div>
            </div>

            <Button
                disabled={!name.trim()}
                onClick={handleSubmit}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-red-600 py-4 font-black tracking-[0.05em] text-white uppercase transition-all hover:bg-red-700 active:scale-[0.98] disabled:bg-gray-200 disabled:text-gray-400 dark:disabled:bg-gray-800"
            >
                Confirm
                <Plus
                    size={18}
                    className="transition-transform group-hover:rotate-90"
                />
            </Button>
        </div>
    );
};

export default CreateTeamForm;
