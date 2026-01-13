import { useLocalStorage } from '@/hooks';
import { useEffect, type PropsWithChildren } from 'react';
import { ThemeContext } from './ThemeContext';
import type { Theme } from './types';

const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [theme, setTheme] = useLocalStorage<Theme>('theme', 'system');

    useEffect(() => {
        const root = document.documentElement;

        if (theme === 'system') {
            const isDark = window.matchMedia(
                '(prefers-color-scheme: dark)',
            ).matches;

            root.classList.toggle('dark', isDark);
            return;
        }

        root.classList.toggle('dark', theme === 'dark');
    }, [theme]);

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

    const toggleTheme = () => {
        setTheme((prev: Theme) => {
            if (prev === 'light') return 'dark';
            if (prev === 'dark') return 'system';
            return 'light';
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
