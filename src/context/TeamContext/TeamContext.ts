import { createContext, useContext } from 'react';
import type { TeamContextType } from './types';

export const TeamContext = createContext<TeamContextType | undefined>(
    undefined,
);

export const useTeams = () => {
    const context = useContext(TeamContext);
    if (!context) {
        throw new Error('useTeams must be used within a TeamProvider');
    }
    return context;
};
