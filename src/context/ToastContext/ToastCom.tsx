import {
    AlertCircle,
    AlertTriangle,
    CheckCircle2,
    Info,
    X,
} from 'lucide-react';
import React from 'react';
import type { Toast } from './types';

const ToastCom: React.FC<Toast & { onClose: VoidFunction }> = ({
    onClose,
    ...toast
}) => {
    const typeConfigs = {
        success: {
            icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
            classes: 'border-green-100 bg-green-50 text-green-900',
        },
        error: {
            icon: <AlertCircle className="h-5 w-5 text-red-500" />,
            classes: 'border-red-100 bg-red-50 text-red-900',
        },
        warning: {
            icon: <AlertTriangle className="h-5 w-5 text-amber-500" />,
            classes: 'border-amber-100 bg-amber-50 text-amber-900',
        },
        info: {
            icon: <Info className="h-5 w-5 text-blue-500" />,
            classes: 'border-blue-100 bg-blue-50 text-blue-900',
        },
    };

    const config =
        typeConfigs[toast.type as keyof typeof typeConfigs] || typeConfigs.info;

    return (
        <div
            className={`animate-in fade-in slide-in-from-bottom-4 sm:slide-in-from-right-4 mx-auto mb-3 flex w-[calc(100vw-2rem)] items-start gap-3 rounded-xl border p-4 shadow-lg duration-300 ease-out sm:mx-0 sm:w-80 md:w-96 ${config.classes} `}
        >
            <div className="mt-0.5 shrink-0">{config.icon}</div>

            <div className="flex-1 pt-0.5">
                <p className="text-sm leading-none font-bold capitalize">
                    {toast.type}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed opacity-90">
                    {toast.message}
                </p>
            </div>

            <button
                onClick={onClose}
                className="-mr-1 shrink-0 rounded-md p-1 opacity-40 transition-all hover:bg-black/5 hover:opacity-100"
                aria-label="Close"
            >
                <X className="h-4 w-4" />
            </button>
        </div>
    );
};

export default ToastCom;
