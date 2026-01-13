import type { PropsWithChildren } from 'react';

const Loader: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="flex h-64 w-full flex-col items-center justify-center gap-4">
            <div className="relative">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-red-500" />

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-gray-400" />
                </div>
            </div>

            <span className="animate-pulse text-xs font-black tracking-[0.2em] text-gray-400 uppercase">
                {children}
            </span>
        </div>
    );
};

export default Loader;
