import { routes } from '@/config';
import { useTheme } from '@/context';
import { Menu, MonitorCog, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { cn } from '../../helper';

const Header = () => {
    const [open, setOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();

    return (
        <header className="w-full border-b-4 border-blue-600 bg-yellow-400 dark:border-yellow-400 dark:bg-gray-900">
            <div className="order-1 mx-auto grid max-w-7xl grid-cols-2 items-center justify-between gap-y-2.5 px-6 py-4 md:grid-cols-3">
                <Link
                    to={routes.HOME.url}
                    className="flex items-center gap-3 select-none"
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-black bg-white">
                        <div className="h-3 w-3 rounded-full bg-black" />
                    </div>
                    <h1 className="text-2xl font-extrabold tracking-wide text-blue-900 dark:text-yellow-300">
                        PokeDex
                    </h1>
                </Link>

                <nav
                    className={cn(
                        'order-2 flex items-center justify-center gap-8 font-bold tracking-tight text-slate-700 dark:text-gray-200',
                        'max-md:order-4 max-md:col-span-full max-md:mt-4 max-md:flex-col max-md:items-start max-md:gap-1 max-md:border-t max-md:pt-4 dark:border-gray-800',
                        !open && 'max-md:hidden',
                    )}
                >
                    {Object.values(routes).map((val) => {
                        const isActive = location.pathname === val.url;

                        return (
                            <Link
                                key={val.url}
                                to={val.url}
                                className={cn(
                                    'group relative py-1 text-sm uppercase transition-all duration-200 hover:text-red-600',
                                    isActive
                                        ? 'text-red-600'
                                        : 'text-slate-600 dark:text-gray-400',
                                    'max-md:w-full max-md:rounded-lg max-md:px-2 max-md:py-3 max-md:hover:bg-gray-50 dark:max-md:hover:bg-gray-800',
                                )}
                            >
                                {val.title}

                                <span
                                    className={cn(
                                        'absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 max-md:hidden',
                                        isActive
                                            ? 'w-full'
                                            : 'w-0 group-hover:w-full',
                                    )}
                                />
                            </Link>
                        );
                    })}
                </nav>

                <div className="order-3 flex items-center justify-end gap-2">
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

                    <button
                        onClick={() => {
                            setOpen((prev) => !prev);
                        }}
                        className="cursor-pointer rounded-full border-2 border-black bg-white p-2 transition hover:scale-110 md:hidden dark:border-yellow-400 dark:bg-gray-800"
                    >
                        <Menu className="size-5 text-gray-800 dark:text-yellow-400" />
                    </button>
                </div>
            </div>
        </header>
    );
};
export default Header;
