import type { ReactNode } from 'react';
import { useLocalStorage } from '../../hooks';
import { TeamContext } from './TeamContext';
import type { TeamMap } from './types';

export const TeamProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [teams, setTeams] = useLocalStorage<TeamMap>('pokemon-teams', {});

    const createTeam = (name: string) => {
        if (!name.trim() || teams[name]) return;
        setTeams((prev) => ({ ...prev, [name]: [] }));
    };

    const deleteTeam = (name: string) => {
        setTeams((prev) => {
            const next = { ...prev };
            delete next[name];
            return next;
        });
    };

    const addPokemonToTeam = (teamName: string, pokemonId: number) => {
        setTeams((prev) => {
            const currentTeam = prev[teamName] || [];

            if (currentTeam.length >= 6) return prev;
            if (currentTeam.includes(pokemonId)) return prev;

            return {
                ...prev,
                [teamName]: [...currentTeam, pokemonId],
            };
        });
    };

    const removePokemonFromTeam = (teamName: string, pokemonId: number) => {
        setTeams((prev) => ({
            ...prev,
            [teamName]: (prev[teamName] || []).filter((id) => id !== pokemonId),
        }));
    };

    const isTeamFull = (teamName: string) => {
        return (teams[teamName]?.length ?? 0) >= 6;
    };

    return (
        <TeamContext.Provider
            value={{
                teams,
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
