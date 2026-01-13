import { MonitorCog, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router';
import { useTheme } from '../../context';

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <header className="w-full border-b-4 border-blue-600 bg-yellow-400 dark:border-yellow-400 dark:bg-gray-900">
            <div className="mx-auto grid max-w-7xl grid-cols-3 items-center justify-between px-6 py-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-black bg-white">
                        <div className="h-3 w-3 rounded-full bg-black" />
                    </div>
                    <h1 className="text-2xl font-extrabold tracking-wide text-blue-900 dark:text-yellow-300">
                        PokeDex
                    </h1>
                </div>

                <nav className="hidden gap-6 font-semibold text-blue-900 md:flex dark:text-gray-200">
                    <Link to="/" className="transition hover:text-red-600">
                        Home
                    </Link>
                    <Link to="/teams" className="transition hover:text-red-600">
                        Pokémon
                    </Link>
                    <a className="transition hover:text-red-600" href="#">
                        Types
                    </a>
                    <a className="transition hover:text-red-600" href="#">
                        Battles
                    </a>
                </nav>

                <div className="flex justify-end">
                    <button
                        onClick={toggleTheme}
                        className="cursor-pointer rounded-full border-2 border-black bg-white p-2 transition hover:scale-110 dark:border-yellow-400 dark:bg-gray-800"
                    >
                        {theme === 'system' ? (
                            <MonitorCog className="size-5 text-yellow-400" />
                        ) : (
                            <>
                                <Moon className="size-5 text-gray-800 dark:hidden dark:text-yellow-400" />
                                <Sun className="size-5 text-gray-800 not-dark:hidden dark:text-yellow-400" />
                            </>
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
};
export default Header;
