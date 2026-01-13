import { cn } from '@/helper';
import React, { type ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'none';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    children,
    className = '',
    ...props
}) => {
    const baseClasses =
        'px-6 py-3 rounded-lg font-bold shadow hover:shadow-lg transition-colors duration-200 cursor-pointer';

    const variantClasses = {
        primary:
            'bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700',
        secondary:
            'bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
        danger: 'bg-red-400 text-white hover:bg-red-500 dark:bg-red-500 dark:hover:bg-red-600',
        none: '',
    };

    return (
        <button
            className={cn(baseClasses, variantClasses[variant], className)}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
