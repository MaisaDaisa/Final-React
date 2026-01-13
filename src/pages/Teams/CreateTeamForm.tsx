import { Button } from '@/components';
import React, { useState } from 'react';

type CreateTeamFormProps = {
    onConfirm: (name: string) => void;
};

const CreateTeamForm: React.FC<CreateTeamFormProps> = ({ onConfirm }) => {
    const [name, setName] = useState('');

    return (
        <div className="flex flex-col gap-4 p-4 text-left">
            <h2 className="text-xl font-black tracking-tight text-gray-900 uppercase dark:text-white">
                Create New Team
            </h2>
            <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-400 uppercase">
                    Team Name
                </label>
                <input
                    autoFocus
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="BTU Rockets!"
                    className="w-full rounded-xl border-2 border-gray-100 bg-gray-50 p-3 outline-none focus:border-red-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
            </div>
            <Button
                disabled={!name.trim()}
                onClick={() => onConfirm(name)}
                className="w-full rounded-xl py-3 font-black tracking-widest text-white uppercase transition-all disabled:opacity-50"
            >
                Confirm
            </Button>
        </div>
    );
};

export default CreateTeamForm;
