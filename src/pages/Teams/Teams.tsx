import { useDialog, useTeams } from '@/context';
import { Plus } from 'lucide-react';
import CreateTeamForm from './CreateTeamForm';
import TeamRow from './TeamRow';

const Teams: React.FC = () => {
    const { teams, activeTeam, setActiveTeam, deleteTeam, createTeam } =
        useTeams();
    const { openDialog, closeDialog } = useDialog();
    const teamNames = Object.keys(teams);

    const handleOpenCreateDialog = () => {
        openDialog({
            content: (
                <CreateTeamForm
                    onConfirm={(name) => {
                        createTeam(name);
                        closeDialog();
                    }}
                />
            ),
        });
    };

    return (
        <div className="mx-auto max-w-5xl p-6 max-md:px-2">
            <div className="mb-10 flex items-end justify-between">
                <div>
                    <h1 className="text-4xl font-black tracking-tighter uppercase dark:text-white">
                        Your Teams
                    </h1>
                    <p className="mt-2 text-gray-500">
                        Manage your rosters and select your active squad.
                    </p>
                </div>

                <button
                    onClick={handleOpenCreateDialog}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/30 transition-transform hover:scale-110 active:scale-95 dark:bg-red-500 dark:shadow-red-500/30"
                    aria-label="Create Team"
                >
                    <Plus />
                </button>
            </div>

            <div className="flex flex-col gap-8">
                {teamNames.length > 0 ? (
                    teamNames.map((name) => (
                        <TeamRow
                            key={name}
                            name={name}
                            ids={teams[name]}
                            isActive={activeTeam === name}
                            onSelect={setActiveTeam}
                            onDelete={deleteTeam}
                        />
                    ))
                ) : (
                    <div className="rounded-3xl bg-gray-50 py-20 text-center dark:bg-gray-800">
                        <p className="font-medium text-gray-400">
                            You haven't created any teams yet.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Teams;
