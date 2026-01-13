export type TeamMap = Record<string, number[]>;

export type TeamContextType = {
    teams: TeamMap;
    activeTeam: string | null;
    setActiveTeam: (name: string) => void;
    createTeam: (name: string) => void;
    deleteTeam: (name: string) => void;
    addPokemonToTeam: (pokemonId: number, teamName?: string) => void;
    removePokemonFromTeam: (pokemonId: number, teamName?: string) => void;
    isTeamFull: (teamName?: string) => boolean;
};
