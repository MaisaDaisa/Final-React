import { createContext, useContext } from 'react';
import type { Theme } from './types';

export const ThemeContext = createContext<ThemeContextType | undefined>(
    undefined,
);

type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: VoidFunction;
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined)
        throw new Error('useTheme must be used within a ThemeProvider');
    return context;
};
