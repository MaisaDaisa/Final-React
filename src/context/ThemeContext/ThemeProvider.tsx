import { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import type { Theme } from './types';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = useState<Theme>(() => {
        return (localStorage.getItem('theme') as Theme) || 'system';
    });

    const setTheme = (newTheme: Theme) => {
        const root = window.document.documentElement;

        if (newTheme === 'system') {
            localStorage.removeItem('theme');
            const isSystemDark = window.matchMedia(
                '(prefers-color-scheme: dark)',
            ).matches;
            root.classList.toggle('dark', isSystemDark);
        } else {
            localStorage.setItem('theme', newTheme);
            root.classList.toggle('dark', newTheme === 'dark');
        }

        setThemeState(newTheme);
    };

    useEffect(() => {
        if (theme !== 'system') return;

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            document.documentElement.classList.toggle(
                'dark',
                mediaQuery.matches,
            );
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
