import { createContext } from 'react';

export type DialogState = {
    open: boolean;
    content?: React.ReactNode;
    wrapperProps?: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >;
};

export type openDialogType = (dialog: Omit<DialogState, 'open'>) => void;

export type DialogContextType = {
    state: DialogState;
    openDialog: openDialogType;
    closeDialog: () => void;
};

export const DialogContext = createContext<DialogContextType | null>(null);
