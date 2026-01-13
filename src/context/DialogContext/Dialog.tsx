import { useEffect, useRef } from 'react';

type DialogProps = {
    open: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    wrapperProps?: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >;
    disableBackdropClose?: boolean;
};

export default function Dialog({
    open,
    onClose,
    children,
    wrapperProps,
    disableBackdropClose = false,
}: DialogProps) {
    const ref = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = ref.current;
        if (!dialog) return;

        if (open && !dialog.open) dialog.showModal();
        if (!open && dialog.open) dialog.close();
    }, [open]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const dialog = ref.current;
            if (!dialog || disableBackdropClose) return;

            const rect = dialog.getBoundingClientRect();
            const { clientX: x, clientY: y } = event;
            if (
                x < rect.left ||
                x > rect.right ||
                y < rect.top ||
                y > rect.bottom
            ) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose, disableBackdropClose]);

    return (
        <dialog
            ref={ref}
            className={`mx-auto my-auto w-[90%] max-w-md bg-transparent shadow-lg outline-0 backdrop-blur-sm backdrop:bg-black backdrop:opacity-80`}
            onCancel={onClose}
        >
            <div
                {...wrapperProps}
                className={`dark:bg-background-dark rounded-2xl border-2 bg-white p-6 text-black dark:border-yellow-300 dark:text-white ${wrapperProps?.className ?? ''}`}
            >
                <div>{children}</div>
            </div>
        </dialog>
    );
}
