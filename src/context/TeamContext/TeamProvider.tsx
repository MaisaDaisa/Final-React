import type { ReactNode } from 'react';
import { useLocalStorage } from '../../hooks';
import { TeamContext } from './TeamContext';
import type { TeamMap } from './types';

export const TeamProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [teams, setTeams] = useLocalStorage<TeamMap>('pokemon-teams', {});
    const [activeTeam, setActiveTeam] = useLocalStorage<string | null>(
        'active-pokemon-team',
        null,
    );

    const createTeam = (name: string) => {
        if (!name.trim() || teams[name]) return;
        setTeams((prev) => ({ ...prev, [name]: [] }));
        if (!activeTeam) setActiveTeam(name);
    };

    const deleteTeam = (name: string) => {
        setTeams((prev) => {
            const next = { ...prev };
            delete next[name];
            return next;
        });
        if (activeTeam === name) setActiveTeam(null);
    };

    const addPokemonToTeam = (pokemonId: number, teamName?: string) => {
        const targetTeam = teamName ?? activeTeam;
        if (!targetTeam || !teams[targetTeam]) return;

        setTeams((prev) => {
            const currentTeam = prev[targetTeam] || [];
            if (currentTeam.length >= 6 || currentTeam.includes(pokemonId))
                return prev;

            return {
                ...prev,
                [targetTeam]: [...currentTeam, pokemonId],
            };
        });
    };

    const removePokemonFromTeam = (pokemonId: number, teamName?: string) => {
        const targetTeam = teamName ?? activeTeam;
        if (!targetTeam) return;

        setTeams((prev) => ({
            ...prev,
            [targetTeam]: (prev[targetTeam] || []).filter(
                (id) => id !== pokemonId,
            ),
        }));
    };

    const isTeamFull = (teamName?: string) => {
        const targetTeam = teamName ?? activeTeam;
        if (!targetTeam) return false;
        return (teams[targetTeam]?.length ?? 0) >= 6;
    };

    return (
        <TeamContext.Provider
            value={{
                teams,
                activeTeam,
                setActiveTeam,
                createTeam,
                deleteTeam,
                addPokemonToTeam,
                removePokemonFromTeam,
                isTeamFull,
            }}
        >
            {children}
        </TeamContext.Provider>
    );
};
