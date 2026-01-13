import { useState, type PropsWithChildren } from 'react';
import { ToastContext } from './toastContext';
import type { Toast } from './types';

export const ToastProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = (toast: Omit<Toast, 'id'>) => {
        const id = crypto.randomUUID();
        const newToast: Toast = { id, duration: 3000, ...toast };
        setToasts((prev) => [...prev, newToast]);

        setTimeout(() => removeToast(id), newToast.duration);
    };

    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
            {children}
            <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-2">
                {toasts.map((t) => (
                    <div
                        key={t.id}
                        className={`rounded px-4 py-2 text-white shadow-lg ${
                            t.type === 'success'
                                ? 'bg-green-500'
                                : t.type === 'error'
                                  ? 'bg-red-500'
                                  : 'bg-blue-500'
                        }`}
                    >
                        {t.message}
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
};
