import { useState, type ReactNode } from 'react';
import Dialog from './Dialog';
import { DialogContext, type DialogState } from './DialogContext';

export type Props = {
    children: ReactNode;
};

export function DialogProvider({ children }: Props) {
    const [state, setState] = useState<DialogState>({ open: false });

    const openDialog = (
        content: ReactNode,
        wrapperProps?: React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLDivElement>,
            HTMLDivElement
        >,
    ) => {
        setState({ open: true, content, wrapperProps });
    };

    const closeDialog = () => {
        setState({ open: false, content: undefined, wrapperProps: undefined });
    };

    return (
        <DialogContext.Provider value={{ state, openDialog, closeDialog }}>
            {children}
            <Dialog open={state.open} onClose={closeDialog}>
                {state.content}
            </Dialog>
        </DialogContext.Provider>
    );
}
