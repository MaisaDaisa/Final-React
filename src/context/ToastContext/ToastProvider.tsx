import { useState, type PropsWithChildren } from 'react';
import ToastCom from './ToastCom';
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
                    <ToastCom {...t} onClose={() => removeToast(t.id)} />
                ))}
            </div>
        </ToastContext.Provider>
    );
};
