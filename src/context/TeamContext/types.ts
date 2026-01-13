export type TeamMap = Record<string, number[]>;

export type TeamContextType = {
    teams: TeamMap;
    createTeam: (name: string) => void;
    deleteTeam: (name: string) => void;
    addPokemonToTeam: (teamName: string, pokemonId: number) => void;
    removePokemonFromTeam: (teamName: string, pokemonId: number) => void;
    isTeamFull: (teamName: string) => boolean;
};
