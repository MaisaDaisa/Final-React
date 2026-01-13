export type ToastType = 'success' | 'error' | 'info';

export type Toast = {
    id: string;
    message: string;
    type?: ToastType;
    duration?: number;
};

export type TostContextType = {
    toasts: Toast[];
    addToast: (toast: Omit<Toast, 'id'>) => void;
    removeToast: (id: string) => void;
};
