import { createContext } from 'react';

export type DialogState = {
    open: boolean;
    content?: React.ReactNode;
    wrapperProps?: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >;
};

export type DialogContextType = {
    state: DialogState;
    openDialog: (
        content: React.ReactNode,
        wrapperProps?: React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLDivElement>,
            HTMLDivElement
        >,
    ) => void;
    closeDialog: () => void;
};

export const DialogContext = createContext<DialogContextType | null>(null);
