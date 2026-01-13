import { useState, type ReactNode } from 'react';
import Dialog from './Dialog';
import {
    DialogContext,
    type DialogState,
    type openDialogType,
} from './DialogContext';

export type Props = {
    children: ReactNode;
};

export function DialogProvider({ children }: Props) {
    const [state, setState] = useState<DialogState>({ open: false });

    const openDialog: openDialogType = (props) => {
        setState({ open: true, ...props });
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
