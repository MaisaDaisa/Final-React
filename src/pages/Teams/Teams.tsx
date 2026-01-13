import { useTeams } from '@/context';
import TeamRow from './TeamRow';

const Teams: React.FC = () => {
    const { teams, activeTeam, setActiveTeam, deleteTeam } = useTeams();
    const teamNames = Object.keys(teams);

    return (
        <div className="mx-auto max-w-5xl p-6">
            <header className="mb-10">
                <h1 className="text-4xl font-black tracking-tighter uppercase dark:text-white">
                    Your Teams
                </h1>
                <p className="text-gray-500">
                    Manage your rosters and select your active squad.
                </p>
            </header>

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
